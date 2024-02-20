import { Storage } from "@google-cloud/storage";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

type ImageUploadType = "createWorld" | "createLaw" | "editor" | "";

export const POST = async (req: NextRequest) => {
  const storage = new Storage({
    projectId: process.env.APP_PROJECT_ID,
    credentials: {
      client_email: process.env.GCS_CLIENT_EMAIL,
      private_key: process.env.GCS_PRIVATE_KEY?.split(String.raw`\n`).join("\n"),
    },
  });

  const formData = await req.formData();
  const type: ImageUploadType = req.nextUrl.searchParams.get("type") as ImageUploadType;

  const file = formData.get("file") as File;

  if (!file.type.startsWith("image/")) throw new Error("file type not image");

  if (!file) throw new Error("file not found");

  const folderName =
    type == "createWorld"
      ? "world_images/"
      : type === "createLaw"
        ? "law_images/"
        : type == "editor"
          ? "editor_images/"
          : "";

  if (folderName === "") throw new Error("folderName not found");

  const uuid = uuidv4();

  const path = `${folderName}${uuid}`;

  if (!path) throw new Error("file path not found");

  const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);

  const buffer = Buffer.from(await file.arrayBuffer());

  await bucket.file(path).save(buffer);

  return NextResponse.json({ url: `https://storage.googleapis.com/so-se-ji-images/${path}` });
};
