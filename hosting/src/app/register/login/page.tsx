"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  GoogleAuthProvider,
  UserCredential,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UseFormReturn, useForm } from "react-hook-form";
import * as z from "zod";

import LoginCard from "@/components/combineUi/login/LoginCard";
import { LOGIN_ACCOUNT_ERROR_MESSAGE } from "@/constants/errorMessage";
import { auth } from "@/firebase/firebase.config";
import useModalParams from "@/hooks/useModalParam";

export type FormType = UseFormReturn<{
  email: string;
  password: string;
}>;

export default function Page() {
  const formSchema = z.object({
    email: z.string().email({ message: "適切なメールアドレスを設定してください" }),
    password: z
      .string()
      .min(6, { message: "パスワードは6文字以上です" })
      .max(20, { message: "パスワード20文字以下です" }),
  });
  const { showModal } = useModalParams();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (user) => {
        form.reset();
        showModal();
        router.replace("");
      })
      .catch(() => {
        showModal(LOGIN_ACCOUNT_ERROR_MESSAGE);
      });
  };
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        if (!result) return showModal(LOGIN_ACCOUNT_ERROR_MESSAGE);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        showModal();
        router.replace("");
      })
      .catch(() => showModal(LOGIN_ACCOUNT_ERROR_MESSAGE));
  };

  const handleAnonymouslySignUp = async () => {
    await signInAnonymously(auth)
      .then((result) => {
        if (!result) return showModal(LOGIN_ACCOUNT_ERROR_MESSAGE);
        showModal();
        router.replace("");
      })
      .catch(() => showModal(LOGIN_ACCOUNT_ERROR_MESSAGE));
  };

  return (
    <main className="flex flex-col items-center justify-center bg-secondary flex-1 relative">
      <Image
        src="/ssg.png"
        alt="ssg"
        width={200}
        height={200}
        className="fixed left-10 top-20 rotate-45"
      />
      <Image
        src="/ssg.png"
        alt="ssg"
        width={200}
        height={200}
        className="fixed -right-10 bottom-20 rotate-90 z-0"
      />
      <LoginCard
        form={form}
        signUpAnonymously={handleAnonymouslySignUp}
        signUpWithEmailAndPassword={handleSubmit}
        signUpWithGoogle={handleGoogleSignUp}
      />
    </main>
  );
}
