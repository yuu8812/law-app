"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import {
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  signInAnonymously,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UseFormReturn, useForm } from "react-hook-form";
import { z } from "zod";

import SignUpCard from "@/components/combineUi/signup/SignUpCard";
import { CREATE_ACCOUNT_ERROR_MESSAGE, EMAIL_IN_USE_ERROR_MESSAGE } from "@/constants/errorMessage";
import { FIREBASE_EMAIL_EXISTS_ERROR } from "@/constants/firebaseError";
import { auth } from "@/firebase/firebase.config";
import useCreateUser from "@/hooks/api/useCreateAccount";
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

  const { createUser } = useCreateUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (user) => {
        await createUser()
          .then((e) => {
            form.reset();
            showModal();
            router.replace("");
          })
          .catch((e) => {
            showModal(CREATE_ACCOUNT_ERROR_MESSAGE);
          });
      })
      .catch((e: FirebaseError) => {
        if (e.code === FIREBASE_EMAIL_EXISTS_ERROR) {
          showModal(EMAIL_IN_USE_ERROR_MESSAGE);
        } else {
          showModal(CREATE_ACCOUNT_ERROR_MESSAGE);
        }
      });
  };
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        if (!result) return showModal(CREATE_ACCOUNT_ERROR_MESSAGE);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        showModal();
        router.replace("");
      })
      .catch(() => showModal(CREATE_ACCOUNT_ERROR_MESSAGE));
  };
  const handleAnonymouslySignUp = async () => {
    await signInAnonymously(auth)
      .then((result) => {
        if (!result) return showModal(CREATE_ACCOUNT_ERROR_MESSAGE);
        showModal();
        router.replace("");
      })
      .catch(() => showModal(CREATE_ACCOUNT_ERROR_MESSAGE));
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
      <SignUpCard
        form={form}
        signUpAnonymously={handleAnonymouslySignUp}
        signUpWithEmailAndPassword={handleSubmit}
        signUpWithGoogle={handleGoogleSignUp}
      />
    </main>
  );
}
