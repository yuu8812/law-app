"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../../ui/dialog";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../../ui/form";
import { Input } from "../../ui/input";

import { FormType } from "@/app/register/signup/page";
import { service } from "@/constants/service";

interface Props {
  form: FormType;
  signUpWithEmailAndPassword: (
    values: z.infer<
      z.ZodObject<
        {
          email: z.ZodString;
          password: z.ZodString;
        },
        "strip",
        z.ZodTypeAny,
        {
          email: string;
          password: string;
        },
        {
          email: string;
          password: string;
        }
      >
    >,
  ) => void;
  signUpWithGoogle: () => void;
  signUpAnonymously: () => void;
}

const SignUpCard: FC<Props> = ({
  form,
  signUpAnonymously,
  signUpWithEmailAndPassword,
  signUpWithGoogle,
}): JSX.Element => {
  return (
    <Card className="w-[95%] lg:w-11/12 flex flex-1 z-10 lg:m-10 my-4 items-center ls:justify-center justify-start lg:max-w-none max-w-[600px]">
      <div className="w-full lg:w-1/2">
        <div className="border-none lg:border-r-2">
          <CardHeader className="m-4 flex flex-col gap-2 ">
            <CardTitle>
              <span className="">{service.name}</span>のメンバーになりましょう
            </CardTitle>
            <CardDescription>アカウントを作成することで投票権が獲得できます</CardDescription>
            {/* mobile only */}
            <div className="flex lg:hidden w-full">
              <Dialog>
                <DialogTrigger asChild className="w-full">
                  <CardDescription>
                    <Button variant="secondary" className="w-full">
                      {service.name}とはなんですか？
                    </Button>
                  </CardDescription>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] flex items-center justify-center">
                  <div className="relative">
                    <DialogTitle>{service.name + "とは？"}</DialogTitle>
                    <DialogDescription className="pt-3">{service.description}</DialogDescription>
                    <CardTitle className="pt-3">{service.sourceQuestion}</CardTitle>
                    <DialogDescription className="pt-3">{service.sourceAnswer}</DialogDescription>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            {/*  */}
          </CardHeader>
          <CardContent className="m-4 -mt-8">
            <div className="">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(signUpWithEmailAndPassword)}
                  className="flex justify-between flex-col"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <div className="h-24">
                        <FormItem>
                          <FormLabel className="text-xs text-primary">メールアドレス</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="email"
                              {...field}
                              autoComplete="email"
                              inputMode="email"
                              type="email"
                            />
                          </FormControl>
                          <FormMessage className="text-xs h-10" />
                        </FormItem>
                      </div>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <div className="h-24">
                        <FormItem>
                          <FormLabel className="text-xs text-primary">パスワード</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="password"
                              {...field}
                              type="password"
                              autoComplete="on"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      </div>
                    )}
                  />
                  <Button type="submit" className="w-full mt-2">
                    はじめる
                  </Button>
                </form>
              </Form>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col border-t-2 items-center justify-around gap-4 -mb-2 pt-4 mx-4">
            <Button
              variant="default"
              className="w-full flex justify-center items-center gap-4 relative bg-secondary text-primary hover:bg-slate-300"
              onClick={signUpWithGoogle}
            >
              <FcGoogle className="absolute left-4" />
              <p>Googleではじめる</p>
            </Button>
            {/* mobile only */}
            <div className="w-full lg:hidden flex flex-col">
              <Button className="w-full" variant="default" onClick={signUpAnonymously}>
                ゲストとしてはじめる
              </Button>
            </div>
            {/*  */}
            <div className="border-t-2 w-full pt-4 flex items-center justify-center flex-col">
              <CardDescription className="self-start mb-2">
                アカウントを持っていますか？
              </CardDescription>
              <Button
                className="w-full flex justify-center items-center relative bg-secondary text-primary hover:bg-slate-300"
                variant="default"
                asChild={true}
              >
                <Link className="w-full" href="/register/login">
                  ログインする
                </Link>
              </Button>
            </div>
          </CardFooter>
        </div>
      </div>
      <div className="hidden lg:flex lg:self-start lg:w-1/2 relative flex-col items-center">
        <CardHeader className="m-4">
          <CardTitle>{service.name}とはなんですか？</CardTitle>
          <CardDescription className="pt-3">{service.description}</CardDescription>
          <CardTitle className="pt-3">{service.sourceQuestion}</CardTitle>
          <CardDescription className="pt-3">{service.sourceAnswer}</CardDescription>
        </CardHeader>
        <Image
          src="/ssg.png"
          alt="ssg"
          width={200}
          height={200}
          className="relative left-10 -top-10 rotate-12"
        />
        {/* PC only */}
        <div className="w-10/12 mt-4">
          <Button className="w-full" variant="default" onClick={() => signUpAnonymously()}>
            ゲストとしてはじめる
          </Button>
        </div>
        {/*  */}
      </div>
    </Card>
  );
};

export default SignUpCard;
