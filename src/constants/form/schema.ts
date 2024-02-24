import { z } from "zod";

const emailPattern = /^[\u0021-\u007e]+$/u;

const passwordPattern = /^[a-zA-Z0-9]+$/;

const emailValidation = z
  .string()
  .email({ message: "メールアドレスを正しい形式で入力してください" })
  .regex(emailPattern, {
    message: "メールアドレスを正しい形式で入力してください",
  });

const passwordValidation = z
  .string()
  .min(6, { message: "6桁以上のパスワードを入力してください" })
  .regex(passwordPattern, {
    message: "英大文字、英小文字、数字で入力してください",
  });

export const basicFormSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
});

export const basicCommentSchema = z
  .string()
  .min(1, "入力してください")
  .max(500, "500文字以内で入力してください");

export const basicUUIDSchema = z.string().uuid();

export const basicCommentObject = z.object({
  comment: basicCommentSchema,
});

export type BasicFormSchemaType = z.infer<typeof basicFormSchema>;
