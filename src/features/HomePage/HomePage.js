import React from "react";

import { TodoList } from "../todoList/todoList";

export function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomeContent">
        <h1 className="PageHeader">Home</h1>

        <TodoList />
      </div>
    </div>
  );
}
