import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import * as Styles from "./project.styles";

interface Props {
	frontmatter: { [id: string]: any };
	markdownBody: string;
}

const Project = ({ frontmatter, markdownBody }: Props) => {
	return (
		<>
			<Styles.Hero imageName={frontmatter.image_name} />

			<Styles.Content>
				<Styles.LinkRow>
					<Link href="/projects">
						<a>
							<FontAwesomeIcon icon={faArrowLeft} /> back to projects
						</a>
					</Link>
					<a href={frontmatter.repo_url}>
						<FontAwesomeIcon icon={faGithub} /> GitHub
					</a>
				</Styles.LinkRow>

				<Styles.Title>{frontmatter.title}</Styles.Title>

				<Styles.Markdown>
					{markdownBody && <ReactMarkdown>{markdownBody}</ReactMarkdown>}
				</Styles.Markdown>
			</Styles.Content>
		</>
	);
};

export default Project;
