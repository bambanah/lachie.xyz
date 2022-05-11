import { AppProps } from "next/app";
import "@styles/global.scss";

export default function Root({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
