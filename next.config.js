const withImages = require("next-images");

module.exports = withImages({
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

	webpack: function (config) {
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader",
		});
		return config;
	},
});
