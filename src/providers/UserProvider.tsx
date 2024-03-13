"use client";
import { useRouter } from "next/navigation";
import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";

import DefaultLoading from "@/components/DefaultLoading";
import LoginBonus from "@/components/LoginBonus";
import { Maintain } from "@/components/Maintain";
import SignUpModal from "@/components/SignInUpModal";
import SosejiDescription from "@/components/SosejiDescription";
import TimeLineModal from "@/components/TimeLineModal";
import UserFirstTimeSetting from "@/components/UserFirstTimeSetting";
import { getLoginBonus } from "@/fetch/loginBonus";
import { auth } from "@/firebase/firebase.client.config";
import { CreateCitizensMutation, useFindUserQuery } from "@/graphql/type";
import { useTimelineModal } from "@/hooks/useTimelineModal";
import { useUser } from "@/hooks/useUser";
import { compareDate } from "@/utils/compareDate";

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const { setUser, state } = useUser();
  const [userLoaded, setUserLoaded] = useState(false);

  const { data, refetch } = useFindUserQuery({ variables: { _eq: auth.currentUser?.uid } });

  const router = useRouter();

  useEffect(() => {
    const unSubUser = auth.onAuthStateChanged(async (user) => {
      await refetch();
      if (user) {
        setUser(
          data?.users[0]?.id
            ? {
                id: data?.users[0]?.id,
                name: data?.users[0].name,
                url: data?.users[0].icon_url ?? "",
                is_first_time: data?.users[0].is_first_time,
                login_bonus_timestamp: data?.users[0].login_bonus_timestamp ?? null,
              }
            : undefined,
        );
      } else {
        setUser(undefined);
      }
    });
    return () => {
      unSubUser();
    };
  }, [data?.users, setUser, refetch, router]);

  useEffect(() => {
    setUserLoaded(false);
    setUser(
      data?.users[0]?.id
        ? {
            id: data?.users[0]?.id,
            name: data?.users[0].name,
            url: data?.users[0].icon_url ?? "",
            is_first_time: data?.users[0].is_first_time,
            login_bonus_timestamp: data?.users[0].login_bonus_timestamp ?? null,
          }
        : undefined,
    );
    setUserLoaded(true);
  }, [data?.users, setUser]);

  const [loginBonus, setLoginBonus] = useState<CreateCitizensMutation | null>(null);

  const memoedLoginBonusTime = useMemo(() => state?.login_bonus_timestamp, [state]);

  const getLoginBonusCallback = useCallback(async () => {
    const data = await getLoginBonus();
    if (data.res) {
      await refetch();
      setLoginBonus(data.res);
    }
  }, [refetch]);

  const memoFunc = useMemo(() => getLoginBonusCallback, [getLoginBonusCallback]);

  const onReady = useCallback(async (func: () => Promise<void>) => {
    await func();
  }, []);

  const { addTimeline, removeModal } = useTimelineModal();

  useEffect(() => {
    if (compareDate(memoedLoginBonusTime) && state?.id) {
      onReady(memoFunc);
    }
  }, [memoedLoginBonusTime, onReady, memoFunc, state]);

  const isRead = localStorage.getItem("read_description") === "true";

  const onCloseLoginBonus = useCallback(async () => {
    removeModal();
    await refetch();
  }, [removeModal, refetch]);

  useEffect(() => {
    if (!isRead) {
      addTimeline({
        child: <SosejiDescription onClose={removeModal} />,
        key: "soseji_description",
      });
      localStorage.setItem("read_description", "true");
    }
    if (state?.is_first_time && state?.id) {
      addTimeline({ child: <UserFirstTimeSetting firstTime />, key: "first_time_setting" });
    }
    if (loginBonus && state?.id) {
      addTimeline({
        child: <LoginBonus data={loginBonus} onClose={onCloseLoginBonus} />,
        key: "login_bonus",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginBonus, state, isRead]);

  const currentTimestamp = new Date().getTime();

  const maintainEndTimestamp = data?.maintenances[0]?.end_timestamp
    ? new Date(data?.maintenances[0]?.end_timestamp).getTime()
    : null;

  const isMaintain = Number(currentTimestamp) < Number(maintainEndTimestamp ?? 0);

  if (!userLoaded) return <DefaultLoading />;

  if (isMaintain) return <Maintain endTimestamp={data?.maintenances[0].end_timestamp} />;

  return (
    <Fragment>
      <SignUpModal />
      <TimeLineModal />
      {children}
    </Fragment>
  );
};
