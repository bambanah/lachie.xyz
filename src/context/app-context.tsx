import React, {
	createContext,
	Dispatch,
	useContext,
	useEffect,
	useState,
} from "react";
import { ThemeProvider } from "styled-components";
import * as themes from "@styles/themes";
import { AnimatePresence, motion } from "framer-motion";
import { THEME_SWITCH_DURATION } from "@utils/globals";

interface AppContextState {
	theme: [string, Dispatch<string>];
}

const AppContext = createContext<AppContextState>({
	theme: [
		"dark",
		() => {
			// do nothing
		},
	],
});

interface Props {
	children: React.ReactNode;
}

export const AppContextProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState("dark");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");

		if (storedTheme !== null) {
			setTheme(storedTheme);
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		}

		setLoading(false);
	}, []);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");

		if (theme !== storedTheme) {
			localStorage.setItem("theme", theme);
		}
	}, [theme]);

	return (
		<AnimatePresence>
			{loading ? (
				<motion.div
					key="blackout"
					initial={{
						opacity: 1,
						zIndex: 1000,
						position: "absolute",
						width: "100vw",
						height: "100vh",
						top: 0,
						left: 0,
						backgroundColor: "black",
					}}
					exit={{ opacity: 0 }}
					transition={{ duration: THEME_SWITCH_DURATION }}
				/>
			) : (
				<AppContext.Provider value={{ theme: [theme, setTheme] }}>
					<ThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
						{children}
					</ThemeProvider>
				</AppContext.Provider>
			)}
		</AnimatePresence>
	);
};

export const useTheme = () => {
	return useContext(AppContext).theme;
};
