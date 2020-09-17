import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import isToday from "date-fns/isToday";
import isFuture from "date-fns/isFuture";

export function TodoList() {
  const todos = useSelector((state) => state.todos);

  const todayTodos = todos.filter((todo) => {
    const todoDate = new Date(todo.date);
    return isToday(todoDate);
  });

  const upcomingTodos = todos.filter((todo) => {
    const todoDate = new Date(todo.date);
    return isFuture(todoDate);
  });

  function Todos({ todos }) {
    return (
      <>
        {todos.map((todo) => {
          return <Todo key={nanoid()} todo={todo} />;
        })}
      </>
    );
  }

  return (
    <div className="todoList">
      <h2>Today</h2>
      <Todos todos={todayTodos} />
      <h2>Upcoming</h2>
      <Todos todos={upcomingTodos} />
    </div>
  );
}

function Todo({ todo }) {
  return (
    <div className="todo">
      <p>{todo.task}</p>
      <p>{todo.date}</p>
    </div>
  );
}
