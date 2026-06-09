import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index.html",
      },
      {
        source: "/aluguel",
        destination: "/aluguel.html",
      },
      {
        source: "/blog",
        destination: "/blog.html",
      },
    ];
  },
};

export default nextConfig;
