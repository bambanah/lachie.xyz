import ThemeSwitch from "@molecules/theme-switch";
import Home from "@templates/home";
import BaseLayout from "@templates/layout";

export default function HomePage() {
	return (
		<BaseLayout>
			<Home />

			<ThemeSwitch />
		</BaseLayout>
	);
}
