import type { NextConfig } from "next";

const imagesDomains = {
  development: ['localhost', '127.0.0.1'],
  production: [''],
};

const nextConfig: NextConfig = {
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
  images: {
    domains: imagesDomains[process.env.ENV_MODE],
  },
};

export default nextConfig;
