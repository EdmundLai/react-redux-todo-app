import React from "react";
import { useSelector, useDispatch } from "react-redux";
import isToday from "date-fns/isToday";
import isFuture from "date-fns/isFuture";
import { Button, Checkbox } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import { toggleTodoCompleted, todoDeleted } from "./todosSlice";

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
          return <Todo key={todo.id} todo={todo} />;
        })}
      </>
    );
  }

  const todayTodosSection =
    todayTodos.length !== 0 ? (
      <>
        <h2>Today</h2>
        <Todos todos={todayTodos} />
      </>
    ) : (
      <></>
    );

  const upcomingTodosSection =
    upcomingTodos.length !== 0 ? (
      <>
        <h2>Upcoming</h2>
        <Todos todos={upcomingTodos} />
      </>
    ) : (
      <></>
    );

  return (
    <div className="todoList">
      <div className="todoActions">
        <Button type="primary" onClick={createNewTodo}>
          <PlusOutlined />
        </Button>
      </div>
      {todayTodosSection}
      {upcomingTodosSection}
    </div>
  );
}

function Todo({ todo }) {
  const dispatch = useDispatch();

  const todoStatusClass = todo.completed ? "taskCompleted" : "";

  function checkboxOnChange(e) {
    //console.log(`checked = ${e.target.checked}`);

    dispatch(toggleTodoCompleted({ todoId: todo.id }));
  }

  function deleteOnClick(e) {
    dispatch(todoDeleted({ todoId: todo.id }));
  }

  return (
    <div className="todo">
      <div>
        <Checkbox
          className="todoCheckbox"
          onChange={checkboxOnChange}
          checked={todo.completed}
        />
        <span className={todoStatusClass}>{todo.task}</span>
      </div>
      <div>
        <Button type="default" onClick={deleteOnClick}>
          <CloseOutlined />
        </Button>
      </div>
    </div>
  );
}
