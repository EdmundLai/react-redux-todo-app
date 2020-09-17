import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import logo from "./logo.svg";
//import { Counter } from "./features/counter/Counter";
import { SideBar } from "./features/Sidebar/SideBar";
import { TodoList } from "./features/todoList/todoList";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="AppBody">
          <Switch>
            <Route exact path="/">
              <div className="HomeHeader">
                <h1>Home</h1>
              </div>

              <TodoList />
            </Route>
            <Route exact path="/calendar">
              Calendar
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
