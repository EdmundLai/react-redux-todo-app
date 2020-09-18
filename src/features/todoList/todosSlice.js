import { createSlice } from "@reduxjs/toolkit";
import format from "date-fns/format";
import addDays from "date-fns/addDays";

const todaysDate = new Date();
const tomorrowsDate = addDays(todaysDate, 1);

const initialState = [
  {
    task: "create a todo list",
    completed: false,
    date: format(todaysDate, "MM/dd/yyyy"),
  },
  {
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
        task: task,
        completed: false,
        date: date,
      };
      //console.log(state);
      state.push(newTask);
    },
  },
});

export const { todoAdded } = todosSlice.actions;

export default todosSlice.reducer;
