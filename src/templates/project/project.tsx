import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

import * as styles from "./project.styles";
interface Props {
	frontmatter: { [id: string]: any };
	markdownBody: string;
}

const Project = ({ frontmatter, markdownBody }: Props) => {
	return (
		<>
			<styles.Hero imageName={frontmatter.image_name} />

			<styles.Content>
				<styles.LinkRow>
					<Link href="/projects">
						<a>
							<FontAwesomeIcon icon={faArrowLeft} /> back to projects
						</a>
					</Link>
					<a href={frontmatter.repo_url}>
						<FontAwesomeIcon icon={faGithub} /> GitHub
					</a>
				</styles.LinkRow>

				<styles.Title>{frontmatter.title}</styles.Title>

				<styles.Markdown>
					{markdownBody && <ReactMarkdown>{markdownBody}</ReactMarkdown>}
				</styles.Markdown>
			</styles.Content>
		</>
	);
};

export default Project;
