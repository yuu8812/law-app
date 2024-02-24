"use client";
import { useRouter } from "next/navigation";
import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";

import CustomModal from "@/components/CustomModal";
import DefaultLoading from "@/components/DefaultLoading";
import LoginBonus from "@/components/LoginBonus";
import SignUpModal from "@/components/SignInUpModal";
import SosejiDescription from "@/components/SosejiDescription";
import UserFirstTimeSetting from "@/components/UserFirstTimeSetting";
import { getLoginBonus } from "@/fetch/loginBonus";
import { auth } from "@/firebase/firebase.client.config";
import { CreateCitizensMutation, useFindUserQuery } from "@/graphql/type";
import { useCustomModal } from "@/hooks/useCustomModal";
import { useUser } from "@/hooks/useUser";
import { compareDate } from "@/utils/compareDate";

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const { setUser, state } = useUser();
  const [userLoaded, setUserLoaded] = useState(false);

  const { data, refetch } = useFindUserQuery({ variables: { _eq: auth.currentUser?.uid } });

  const { openModal, closeModal } = useCustomModal();

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
        console.log(user, "signin");
      } else {
        setUser(undefined);
        console.log("signout");
      }
    });
    return () => {
      unSubUser();
    };
  }, [data?.users, setUser, refetch, openModal, router]);

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
      setLoginBonus(data.res);
    }
  }, []);

  const memoFunc = useMemo(() => getLoginBonusCallback, [getLoginBonusCallback]);

  const onReady = useCallback(async (func: () => Promise<void>) => {
    await func();
  }, []);

  useEffect(() => {
    if (compareDate(memoedLoginBonusTime) && state?.id) {
      console.log("fetching login bonus...");
      onReady(memoFunc);
    }
  }, [memoedLoginBonusTime, onReady, memoFunc, state, openModal]);

  const [readDescription, setReadDescription] = useState(false);

  useEffect(() => {
    if (loginBonus || state?.is_first_time || !readDescription) {
      setTimeout(() => {
        openModal();
      }, 500);
    }
  }, [loginBonus, state?.is_first_time, readDescription, openModal]);

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setLoginBonus(null);
    }, 500);
  };

  const isRead = localStorage.getItem("read_description") === "true";

  useEffect(() => {
    if (isRead) {
      setReadDescription(isRead);
    }
  }, [isRead, openModal]);

  const handleClose2 = () => {
    closeModal();
    setTimeout(() => {
      localStorage.setItem("read_description", "true");
      setReadDescription(true);
    }, 500);
  };

  const switchModal = () => {
    if (state?.is_first_time) {
      return (
        <CustomModal option={!!state?.is_first_time}>
          <UserFirstTimeSetting />
        </CustomModal>
      );
    }
    if (!readDescription) {
      return (
        <CustomModal option={!readDescription} handleClose={handleClose2}>
          <SosejiDescription onClose={handleClose2} />
        </CustomModal>
      );
    }
    if (loginBonus) {
      return (
        <CustomModal option={!!loginBonus} handleClose={handleClose}>
          <LoginBonus data={loginBonus} onClose={handleClose} />
        </CustomModal>
      );
    }
  };

  if (!userLoaded) return <DefaultLoading />;

  return (
    <Fragment>
      {switchModal()}
      <SignUpModal />
      {children}
    </Fragment>
  );
};
