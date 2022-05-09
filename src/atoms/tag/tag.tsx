import { FC } from "react";
import { StyledTag } from "./styles";

interface Props {
	name?: string;
	fg: string;
	bg: string;
}

const Tag: FC<Props> = ({ name, fg, bg }) => {
	return (
		<StyledTag fg={fg} bg={bg}>
			<p>{name ?? ""}</p>
		</StyledTag>
	);
};

Tag.defaultProps = {
	fg: "#000",
	bg: "#fff",
};

export default Tag;
