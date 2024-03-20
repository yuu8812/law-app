"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import AnimateModal from "@/components/AnimatedModal";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { GoogleButton } from "@/components/GoogleButton";
import { Input } from "@/components/Input";
import { BasicFormSchemaType, basicFormSchema } from "@/constants/form/schema";
import { auth } from "@/firebase/firebase.client.config";
import { useSignUpModal } from "@/hooks/useSignupModal";

const SignInUpModal = () => {
  const [type, setType] = useState<"signIn" | "login">("signIn");
  const { state, closeModal } = useSignUpModal();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<BasicFormSchemaType>({
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(basicFormSchema),
  });

  const onSubmit = async (data: BasicFormSchemaType) => {
    if (!isValid) return;
    if (type === "signIn") {
      const user = await createUserWithEmailAndPassword(auth, data.email, data.password).catch(
        () => null,
      );
      if (!user) {
        toast.error("サインアップに失敗しました");
        return;
      }
      toast.success("サインアップに成功しました");
      router.refresh();
      closeModal();
      reset();
      return;
    }
    if (type === "login") {
      const user = await signInWithEmailAndPassword(auth, data.email, data.password).catch(
        () => null,
      );
      if (!user) {
        toast.error("ログインに失敗しました");
        return;
      }
      toast.success("ログインに成功しました");
      router.refresh();
      closeModal();
      reset();
      return;
    }
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then(async () => {
        toast.success("サインアップに成功しました");
        router.refresh();
        closeModal();
        reset();
      })
      .catch(() => {
        toast.error("サインアップに失敗しました");
        return;
      });
  };
  return (
    <AnimatePresence>
      {state.state === "open" && (
        <AnimateModal handleClose={closeModal}>
          <Card className="relative -mt-14 flex h-[500px] w-[400px] items-center justify-center rounded shadow md:top-auto">
            <form className="h-full w-full">
              <div className="relative flex h-full w-full flex-col items-center justify-center gap-7">
                <div className="m-4 font-bold">
                  アカウントの{type == "signIn" ? "作成" : "認証"}が必要です
                </div>
                <Input<BasicFormSchemaType>
                  placeHolder="入力してください"
                  width="w-80"
                  register={register}
                  inputName="email"
                  type="email"
                  isError={!!errors.email}
                  required
                  label="メールアドレス"
                  errorMessage={errors.email?.message}
                />
                <Input<BasicFormSchemaType>
                  placeHolder="入力してください"
                  width="w-80"
                  register={register}
                  inputName="password"
                  type="password"
                  isError={!!errors.password}
                  required
                  label="パスワード"
                  errorMessage={errors.password?.message}
                />
                <div
                  className="-my-4 cursor-pointer pt-4 text-sm hover:underline"
                  onClick={() => setType((prev) => (prev == "signIn" ? "login" : "signIn"))}
                >
                  or {type == "signIn" ? "ログインへ" : "サインアップへ"}
                </div>
                <Button
                  text={type == "signIn" ? "サインインする" : "ログインする"}
                  buttonType="primary"
                  type="submit"
                  disabled={!isValid}
                  onClick={handleSubmit(onSubmit)}
                />
                <div className="h-[1px] w-10/12 bg-black" />
                <GoogleButton type={type} onClick={googleSignIn} />
              </div>
            </form>
            <div className="absolute -bottom-14 w-40" onClick={closeModal}>
              <Button text="閉じる" width="w-40" />
            </div>
          </Card>
        </AnimateModal>
      )}
    </AnimatePresence>
  );
};

export default SignInUpModal;
