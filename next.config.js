const withImages = require("next-images");
const withMDX = require("@next/mdx")({
  extension: /\.md?$/,
});

module.exports = withImages({
  pageExtensions: ["js", "jsx", "md", "mdx"],

  webpack: function (config) {
    config.node = { fs: "empty" };

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
});
