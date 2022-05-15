import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Styles from "./theme-switch.styles";
import { useTheme } from "@context/app-context";
import { THEME_SWITCH_DURATION } from "@utils/globals";

const size = 6.7;

const ThemeSwitch = () => {
	const [theme, setTheme] = useTheme();

	return (
		<Styles.Container size={size}>
			<AnimatePresence>
				{theme === "light" && (
					<motion.div
						className="sun"
						key="sun"
						onTap={() => setTheme("dark")}
						initial={{ y: "100vh", zIndex: 100 }}
						animate={{
							y: 0,
						}}
						exit={{
							y: "100vh",
							zIndex: 1,
						}}
						transition={{ duration: THEME_SWITCH_DURATION }}
					/>
				)}
				{theme === "dark" && (
					<motion.div
						className="moon"
						key="moon"
						onTap={() => setTheme("light")}
						initial={{ y: "100vh", zIndex: 100 }}
						animate={{
							y: 0,
						}}
						exit={{ y: 1200, zIndex: 1 }}
						transition={{ duration: THEME_SWITCH_DURATION }}
					/>
				)}
			</AnimatePresence>
		</Styles.Container>
	);
};

export default ThemeSwitch;
