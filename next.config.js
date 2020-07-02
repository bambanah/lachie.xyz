const withImages = require("next-images");
const withMDX = require("@next/mdx")({
  extension: /\.md?$/,
});

module.exports = withImages(
  withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
  })
);
