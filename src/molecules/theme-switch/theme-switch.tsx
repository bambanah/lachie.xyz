import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Styles from "./theme-switch.styles";
import { useTheme } from "@context/app-context";
import { THEME_SWITCH_DURATION } from "@utils/globals";
import { useMediaQuery } from "src/hooks/use-media-query";

const size = 20;

const SunMoon = ({
	variant,
	isSmall,
}: {
	variant: "sun" | "moon";
	isSmall: boolean;
}) => {
	const [, setTheme] = useTheme();

	return (
		<motion.div
			className={variant}
			key={variant}
			onTap={() => setTheme(variant === "sun" ? "dark" : "light")}
			initial={{ y: isSmall ? `-${size / 2}em` : `${size / 2}em` }}
			animate={{
				y: 0,
			}}
			exit={{
				y: isSmall ? `-${size / 2}em` : `${size}em`,
			}}
			transition={{ duration: THEME_SWITCH_DURATION }}
		/>
	);
};

const ThemeSwitch = () => {
	const [theme] = useTheme();

	const isSmall = useMediaQuery("(max-width: 700px)");

	return (
		<Styles.Container size={size}>
			<AnimatePresence>
				{theme === "light" && (
					<SunMoon key="sun" variant="sun" isSmall={isSmall} />
				)}
				{theme === "dark" && (
					<SunMoon key="moon" variant="moon" isSmall={isSmall} />
				)}
			</AnimatePresence>
		</Styles.Container>
	);
};

export default ThemeSwitch;
