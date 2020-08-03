import PropTypes from "prop-types";

function Tag({ name, fg, bg }) {
  return (
    <li className="tag">
      <p>{name}</p>

      <style jsx>{`
        .tag {
          background-color: ${bg};
          color: ${fg};

          font-family: "Recursive";
          font-size: 0.9em;
          display: inline-block;
          padding: 2px 4px;
          border-radius: 2px;
          margin-right: 5px;
        }

        .tag p {
          line-height: 1em;
        }
      `}</style>
    </li>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  fg: PropTypes.string,
  bg: PropTypes.string,
};

Tag.defaultProps = {
  fg: "#000",
  bg: "#fff",
};

export default Tag;
