import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import isToday from "date-fns/isToday";
import isFuture from "date-fns/isFuture";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export function TodoList() {
  const todos = useSelector((state) => state.todos);

  const history = useHistory();

  const todayTodos = todos.filter((todo) => {
    const todoDate = new Date(todo.date);
    return isToday(todoDate);
  });

  const upcomingTodos = todos.filter((todo) => {
    const todoDate = new Date(todo.date);
    return isFuture(todoDate);
  });

  function createNewTodo() {
    history.push("/addTodo");
  }

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
      <div className="todoActions">
        <Button type="primary" onClick={createNewTodo}>
          <PlusOutlined />
        </Button>
      </div>
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
