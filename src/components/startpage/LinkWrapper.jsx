import React from "react";
import { useSelector } from "react-redux";
import { useFirebaseConnect, isEmpty } from "react-redux-firebase";
import Category from "./Category";

export default function LinkWrapper(props) {
  useFirebaseConnect(`users/${props.userId}/links`);

  let linkCategories = useSelector(
    ({
      firebase: {
        ordered: { users },
      },
    }) => users && users[props.userId].links
  );

  if (isEmpty(linkCategories)) {
    return <div>Loading...</div>;
  } else {
    let categories = {};
    linkCategories.forEach((category) => {
      categories[category.key] = category.value;
    });

    return (
      <>
        {categories &&
          Object.keys(categories).map((category_name) => {
            const category_values = categories[category_name];

            return (
              <Category
                key={category_name}
                name={category_name}
                values={category_values}
              />
            );
          })}
      </>
    );
  }
}
