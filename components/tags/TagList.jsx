import { getTagStyles } from "../../lib/projects";
import Tag from "./Tag";

export default function TagList({ tags }) {
  const tagStyles = getTagStyles();

  return (
    <>
      <ul className="tag_list">
        {tags.map((tag_name) => (
          <Tag
            name={tagStyles[tag_name].display}
            fg={tagStyles[tag_name].fg}
            bg={tagStyles[tag_name].bg}
            key={tag_name}
          ></Tag>
        ))}

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
