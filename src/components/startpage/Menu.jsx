import React from "react";

import DisplayAuthAction from "../auth/DisplayAuthAction";
import EditLinks from "./EditLinks";

function Menu() {
  return (
    <>
      <button onClick={editLinks()}>Yeet</button>
      <DisplayAuthAction />
      <EditLinks></EditLinks>
    </>
  );
}

function editLinks() {}

export default Menu;
