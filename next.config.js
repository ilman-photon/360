const path = require("path");
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  eslint: {
    dirs: ["src"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/:path((?!login$).* || (?!forgot-password$).*)",
        has: [
          {
            type: "cookie",
            key: "authorized",
            value: "false",
          },
        ],
        permanent: false,
        destination: "/login",
      },
      {
        source: "/",
        destination: "/patient/login",
        permanent: false,
      }
    ];
  },
  async rewrites() {
    return [
      {
        has: [
          {
            type: "host",
            value: "(?<host>.*)",
          },
        ],
        source: "/:host/create-account",
        destination: "/auth/create-account",
      },
      {
        source: "/patient/sync/login",
        destination: "/patient/login",
      },
      {
        source: "/patient/sync",
        destination: "/patient/forgot-password",
      }
    ];
  },
  env: {
    // Set PORT to environtment variable (e.g: PORT=3005 npm run dev)
    PORT: process.env.PORT,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
  },
  // temporary fixing for next/image
  images: {
    domains: ['c4.wallpaperflare.com', 'loremflickr.com']
  },
  i18n
};

module.exports = nextConfig;
