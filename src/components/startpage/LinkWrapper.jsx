import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFirebaseConnect, isEmpty } from "react-redux-firebase";
import Category from "./Category";

export default function LinkWrapper(props) {
  useFirebaseConnect(`users/${props.userId}/links`);

  const [state, setState] = useState(props);
  useEffect(() => {
    setState(props);
  }, [props]);

  let categories = useSelector(
    ({
      firebase: {
        data: { users },
      },
    }) => users && users[props.userId].links
  );

  if (isEmpty(categories)) {
    return <div>Loading...</div>;
  } else {
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
                edit={state.edit}
              />
            );
          })}
      </>
    );
  }
}
