import "@styles/fonts.scss";
import GlobalStyle from "@styles/global-style";
import { AppProps } from "next/app";
import { AppContextProvider } from "src/context/app-context";

export default function Root({ Component, pageProps }: AppProps) {
	return (
		<AppContextProvider>
			<GlobalStyle />

			<Component {...pageProps} />
		</AppContextProvider>
	);
}
