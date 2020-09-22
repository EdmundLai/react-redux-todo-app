import { createSlice, nanoid } from "@reduxjs/toolkit";
import format from "date-fns/format";
import addDays from "date-fns/addDays";

const todaysDate = new Date();
const tomorrowsDate = addDays(todaysDate, 1);

const initialState = [
  {
    id: nanoid(),
    task: "create a todo list",
    completed: true,
    date: format(todaysDate, "MM/dd/yyyy"),
  },
  {
    id: nanoid(),
    task: "create a calendar app",
    completed: false,
    date: format(tomorrowsDate, "MM/dd/yyyy"),
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      const { task, date } = action.payload;
      const newTask = {
        id: nanoid(),
        task: task,
        completed: false,
        date: date,
      };
      //console.log(state);
      state.push(newTask);
    },
    toggleTodoCompleted(state, action) {
      const { todoId } = action.payload;
      const selectedTodo = state.find((todo) => todo.id === todoId);
      selectedTodo.completed = !selectedTodo.completed;
    },
    todoDeleted(state, action) {
      const { todoId } = action.payload;
      return state.filter((todo) => todo.id !== todoId);
    },
  },
});

export const {
  todoAdded,
  toggleTodoCompleted,
  todoDeleted,
} = todosSlice.actions;

export default todosSlice.reducer;
