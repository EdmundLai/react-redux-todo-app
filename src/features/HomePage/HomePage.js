import React from "react";

import { TodoList } from "../todoList/todoList";

export function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomeContent">
        <div className="HomeHeader">
          <h1>Home</h1>
        </div>
        <TodoList />
      </div>
    </div>
  );
}
