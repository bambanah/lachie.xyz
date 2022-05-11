import Tag from "@atoms/tag/tag";

import tagStyles from "../config/tag-styles";

interface Props {
	tags: string[];
}

export default function TagList({ tags }: Props) {
	const listItems = tags.map((tag) => {
		const fg =
			tag in tagStyles ? tagStyles[tag].fg : tagStyles["unspecified"].fg;

		const bg =
			tag in tagStyles ? tagStyles[tag].bg : tagStyles["unspecified"].bg;

		const display = tag in tagStyles ? tagStyles[tag].display : tag;

		return <Tag name={display} fg={fg} bg={bg} key={tag}></Tag>;
	});

	return (
		<>
			<ul className="tag_list">
				{listItems}

				<style jsx>
					{`
						.tag_list {
							list-style: none;
						}
					`}
				</style>
			</ul>
		</>
	);
}
