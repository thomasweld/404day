import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/404day" : "";
const assetPrefix = isProd ? "/404day/" : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  ...(assetPrefix && { assetPrefix }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
