import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todoList/todosSlice";

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
