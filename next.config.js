const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vinfast-cars.vn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vinfastdienchau.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vinfastcamau.vn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kiabinhtrieu3s.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hyundai-mientrung.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.kianhatrang.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "katavina.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kiacantho.com.vn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kia.giaxeoto24h.vn",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
