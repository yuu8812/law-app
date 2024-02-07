"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { GoogleButton } from "@/components/GoogleButton";
import { Input } from "@/components/Input";
import { BasicFormSchemaType, basicFormSchema } from "@/constants/form/schema";
import { auth } from "@/firebase/firebase.client.config";

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
    router.prefetch("/world");
    const user = await createUserWithEmailAndPassword(auth, data.email, data.password).catch(
      () => null,
    );
    if (!user) {
      toast.error("サインインに失敗しました");
      return;
    }
    toast.success("サインインに成功しました");
    router.replace("/world");
    return;
  };

  const googleSignIn = async () => {
    router.prefetch("/world");
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    if (!user) {
      toast.error("サインインに失敗しました");
      return;
    }
    toast.success("サインインに成功しました");
    router.replace("/world");
    return;
  };

  return (
    <div className="relative flex flex-1 items-center justify-center">
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
