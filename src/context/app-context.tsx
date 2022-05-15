import React, {
	createContext,
	Dispatch,
	useContext,
	useEffect,
	useState,
} from "react";
import { ThemeProvider } from "styled-components";
import * as themes from "@styles/themes";

interface AppContextState {
	theme: [string, Dispatch<string>];
}

const AppContext = createContext<AppContextState>({
	theme: [
		"light",
		() => {
			// do nothing
		},
	],
});

interface Props {
	children: React.ReactNode;
}

export const AppContextProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");

		if (storedTheme !== null) {
			setTheme(storedTheme);
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		}
	}, []);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");

		if (theme !== storedTheme) {
			localStorage.setItem("theme", theme);
		}
	}, [theme]);

	return (
		<AppContext.Provider value={{ theme: [theme, setTheme] }}>
			<ThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
				{children}
			</ThemeProvider>
		</AppContext.Provider>
	);
};

export const useTheme = () => {
	return useContext(AppContext).theme;
};
