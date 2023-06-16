import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {},
};
const IndexPage = () => {
  console.log(process.env.NEXT_PUBLIC_APP_API_KEY);
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10"></section>
  );
};

export default IndexPage;
