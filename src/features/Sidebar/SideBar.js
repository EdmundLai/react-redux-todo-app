import React from "react";

import { useHistory, useLocation } from "react-router-dom";

export function SideBar() {
  const history = useHistory();
  const location = useLocation();

  function SideBarItem({ path, itemName }) {
    const highlightItem =
      location.pathname === path ? "SideBarHighlighted" : "";

    return (
      <li
        className={highlightItem}
        onClick={() => {
          history.push(path);
        }}
      >
        {itemName}
      </li>
    );
  }

  return (
    <div className="SideBar">
      <div className="SideBarLinks">
        <ul>
          <SideBarItem path="/" itemName="Home" />
          <SideBarItem path="/calendar" itemName="Calendar" />
        </ul>
      </div>
    </div>
  );
}
