const withImages = require("next-images");
const path = require("path");

module.exports = withImages({
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

	webpack: function (config) {
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader",
		});
		return config;
	},
	compiler: {
		styledComponents: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "src/styles")],
	},
	eslint: {
		dirs: ["."],
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
});
