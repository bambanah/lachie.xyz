const path = require("node:path");

module.exports = {
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

	compiler: {
		styledComponents: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "src/styles")],
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	output: "standalone",
	agentRules: false,
};
