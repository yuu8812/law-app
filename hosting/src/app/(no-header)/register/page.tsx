"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { BasicFormSchemaType, basicFormSchema } from "@/constants/form/schema";
import { auth } from "@/firebase/firebase.client.config";
import { BreadCrumb } from "@/components/BreadCrumb";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { GoogleButton } from "@/components/GoogleButton";
import { Input } from "@/components/Input";

export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<BasicFormSchemaType>({
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(basicFormSchema),
  });

  const onSubmit = async (data: BasicFormSchemaType) => {
    if (!isValid) return;
    router.prefetch("/laws");
    const user = await createUserWithEmailAndPassword(auth, data.email, data.password).catch(
      () => null,
    );
    if (!user) {
      toast.error("サインインに失敗しました");
      return;
    }
    const res = await fetch("http://localhost:3000/api/auth", {
      method: "post",
      body: JSON.stringify({ id: await user.user.getIdToken() }),
    }).catch(() => null);
    if (!res) {
      toast.error("サインインに失敗しました");
      return;
    }
    toast.success("サインインに成功しました");
    router.replace("/laws");
    return;
  };

  const googleSignIn = async () => {
    router.prefetch("/laws");
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    if (!user) return undefined;
    const res = await fetch("http://localhost:3000/api/auth", {
      method: "post",
      body: JSON.stringify({ id: await user.user.getIdToken() }),
    });
    if (!res) {
      toast.error("サインインに失敗しました");
      return;
    }
    toast.success("サインインに成功しました");
    router.replace("/laws");
    return;
  };

  return (
    <div className="relative flex flex-1 items-center justify-center">
      <div className="absolute left-4 top-2">
        <BreadCrumb text="アカウントを作成" href="/" />
      </div>
      <Card className="relative h-[500px] w-[400px]">
        <form className="h-full w-full">
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-7">
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
            <Button
              text="送信する"
              buttonType="danger"
              type="submit"
              disabled={!isValid}
              onClick={handleSubmit(onSubmit)}
            />
            <div className="h-[1px] w-10/12 bg-black" />
            <GoogleButton type="signIn" onClick={googleSignIn} />
          </div>
        </form>
      </Card>
    </div>
  );
}
