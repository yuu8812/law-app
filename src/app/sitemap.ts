import { MetadataRoute } from "next";

import { adminClient } from "@/apiCaller/adminClient";
import { GetSitemapInfoDocument, GetSitemapInfoQuery } from "@/graphql/type";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultUrl = "https://so-se-ji.com";
  const { data }: { data: GetSitemapInfoQuery } = await adminClient().query({
    query: GetSitemapInfoDocument,
  });

  const topLevel = [
    {
      url: `${defaultUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${defaultUrl}/law`,
      lastModified: new Date(),
      changeFrequency: "always",
    },
    {
      url: `${defaultUrl}/world`,
      lastModified: new Date(),
      changeFrequency: "always",
    },
  ];

  const laws = data.laws.map((law) => {
    return {
      url: `${defaultUrl}/law/${law.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
    };
  });

  const worlds = data.worlds.map((world) => {
    return {
      url: `${defaultUrl}/world/${world.id}/description`,
      lastModified: new Date(),
      changeFrequency: "weekly",
    };
  });

  const siteMap = [...topLevel, ...laws, ...worlds];

  return siteMap as MetadataRoute.Sitemap;
}
