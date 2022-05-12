import BaseLayout from "@templates/layout";
import Project from "@templates/project";
import { GetStaticProps } from "next";
import { getAllProjectIds, getMarkdown } from "../../lib/projects";

interface Props {
	frontmatter: { [id: string]: any };
	markdownBody: string;
}

export default function ProjectPage({ frontmatter, markdownBody }: Props) {
	return (
		<BaseLayout title={frontmatter.title}>
			<Project frontmatter={frontmatter} markdownBody={markdownBody} />
		</BaseLayout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { frontmatter, content } = await getMarkdown(String(params?.id) ?? "");

	return {
		props: {
			projectId: String(params?.id) ?? "",
			frontmatter: frontmatter,
			markdownBody: content,
		},
	};
};

export async function getStaticPaths() {
	const projectIds = getAllProjectIds();

	const paths = projectIds.map((id) => {
		return {
			params: { id: id },
		};
	});

	return {
		paths: paths,
		fallback: false,
	};
}
