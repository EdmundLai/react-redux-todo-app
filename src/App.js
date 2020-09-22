import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideBar } from "./features/Sidebar/SideBar";
import { HomePage } from "./features/HomePage/HomePage";
import { CreateTodo } from "./features/todoList/createTodo";
import { CalendarTasks } from "./features/calendar/CalendarTasks";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="AppBody">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/calendar">
              <CalendarTasks />
            </Route>
            <Route exact path="/addTodo" component={CreateTodo} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
