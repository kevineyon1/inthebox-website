import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" menghasilkan server Node minimal — cocok untuk deploy di droplet (Docker/PM2).
  output: "standalone",
};

export default nextConfig;
