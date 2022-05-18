import "@styles/globals.scss";
import GlobalStyle from "@styles/global-style";
import { AppProps } from "next/app";
import { AppContextProvider } from "src/context/app-context";
import Head from "next/head";

export default function Root({ Component, pageProps }: AppProps) {
	return (
		<AppContextProvider>
			<Head>
				<title>Lachlan Underhill</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Currently employed as a Software Development Engineer at Amazon. Come check me out!"
				/>
				<meta
					name="viewport"
					content="height=device-height, width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</Head>
			<GlobalStyle />

			<Component {...pageProps} />
		</AppContextProvider>
	);
}
