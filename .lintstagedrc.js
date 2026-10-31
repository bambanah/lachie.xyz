const path = require("path");

const buildEslintCommand = (filenames) =>
	`eslint --fix ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(" ")}`;

module.exports = {
	"*": "prettier --ignore-unknown --write",
	"*.{js,jsx,ts,tsx}": [buildEslintCommand, "bash -c tsc --pretty --noEmit"],
};
