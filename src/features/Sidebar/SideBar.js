import React from "react";

import { useHistory } from "react-router-dom";

export function SideBar() {
  const history = useHistory();

  return (
    <div className="SideBar">
      <div className="SideBarLinks">
        <ul>
          <li
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              history.push("/calendar");
            }}
          >
            Calendar
          </li>
        </ul>
      </div>
    </div>
  );
}
