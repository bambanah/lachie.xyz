import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Styles from "./theme-switch.styles";
import { useTheme } from "@context/app-context";
import { THEME_SWITCH_DURATION } from "@utils/globals";
import { useMediaQuery } from "src/hooks/use-media-query";

const size = 20;

const ThemeSwitch = () => {
	const [theme, setTheme] = useTheme();

	const isSmall = useMediaQuery("(max-width: 700px)");

	return (
		<Styles.Container size={size}>
			<AnimatePresence>
				{theme === "light" && (
					<motion.div
						className="sun"
						key="sun"
						onTap={() => setTheme("dark")}
						initial={{ y: isSmall ? `-${size}em` : `${size}em` }}
						animate={{
							y: 0,
						}}
						exit={{
							y: isSmall ? `-${size / 2}em` : `${size / 2}em`,
						}}
						transition={{ duration: THEME_SWITCH_DURATION }}
					/>
				)}
				{theme === "dark" && (
					<motion.div
						className="moon"
						key="moon"
						onTap={() => setTheme("light")}
						initial={{ y: isSmall ? `-${size}em` : `${size}em` }}
						animate={{
							y: 0,
						}}
						exit={{ y: isSmall ? `-${size / 2}em` : `${size / 2}em` }}
						transition={{ duration: THEME_SWITCH_DURATION }}
					/>
				)}
			</AnimatePresence>
		</Styles.Container>
	);
};

export default ThemeSwitch;
