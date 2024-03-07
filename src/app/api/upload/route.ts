import { Storage } from "@google-cloud/storage";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";

import { firebaseAdmin } from "@/firebase/firebase.admin.config";

type ImageUploadType = "createWorld" | "createLaw" | "editor" | "user_icon" | "";

export const POST = async (req: NextRequest) => {
  const storage = new Storage({
    projectId: process.env.APP_PROJECT_ID,
    credentials: {
      project_id: process.env.APP_PROJECT_ID,
      client_email: process.env.GCS_CLIENT_EMAIL,
      private_key: process.env.GCS_PRIVATE_KEY?.split(String.raw`\n`).join("\n"),
    },
  });

  const cookieStore = cookies();

  const token = cookieStore.get("__session")?.value;

  if (!token) throw new Error("Unauthorized");

  const user = await firebaseAdmin.auth().verifySessionCookie(token);

  if (!user) throw new Error("Unauthorized");

  const formData = await req.formData();
  const type: ImageUploadType = req.nextUrl.searchParams.get("type") as ImageUploadType;

  const file = formData.get("file") as File;

  if (!file.type.startsWith("image/")) throw new Error("file type not image");

  if (!file) throw new Error("file not found");

  let fileBuffer = await file.arrayBuffer();

  const folderName =
    type == "createWorld"
      ? "world_images/"
      : type === "createLaw"
        ? "law_images/"
        : type == "editor"
          ? "editor_images/"
          : type == "user_icon"
            ? "user_icons/"
            : "";

  const resized = await sharp(fileBuffer).resize(40, 40).toBuffer();

  if (type === "user_icon") fileBuffer = resized;

  if (folderName === "") throw new Error("folderName not found");

  const uuid = uuidv4();

  const path = `${folderName}${uuid}`;

  if (!path) throw new Error("file path not found");

  const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);

  const buffer = Buffer.from(await file.arrayBuffer());

  await bucket.file(path).save(buffer, {});

  return NextResponse.json({ url: `https://storage.googleapis.com/so-se-ji-images/${path}` });
};
