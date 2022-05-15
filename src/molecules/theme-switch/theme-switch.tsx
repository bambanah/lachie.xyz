import React from "react";
import { motion } from "framer-motion";
import * as Styles from "./theme-switch.styles";
import { useTheme } from "@context/app-context";

const size = 6.7;

const ThemeSwitch = () => {
	const [theme, setTheme] = useTheme();

	return (
		<Styles.Container size={size}>
			<motion.div
				className="sun"
				onTap={() => setTheme("dark")}
				initial={{ y: theme === "light" ? 0 : `${size}em` }}
				animate={{
					y: theme === "light" ? 0 : `${size}em`,
					zIndex: theme === "light" ? 100 : 0,
				}}
				transition={{ duration: 1 }}
			/>
			<motion.div
				className="moon"
				onTap={() => setTheme("light")}
				initial={{ y: theme === "dark" ? `-${size}em` : 0 }}
				animate={{
					y: theme === "dark" ? `-${size}em` : 0,
					zIndex: theme === "dark" ? 100 : 0,
				}}
				transition={{ duration: 1 }}
			/>
		</Styles.Container>
	);
};

export default ThemeSwitch;
