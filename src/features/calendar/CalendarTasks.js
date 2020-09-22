import React from "react";
import { useSelector } from "react-redux";

import Calendar from "../../components/Calendar";

import { Badge } from "antd";

export function CalendarTasks() {
  const todos = useSelector((state) => state.todos);
  const calendarEvents = createCalendarEventsObj(todos);
  //console.log(calendarEvents);

  function dateCellRender(value) {
    const currMonth = value.getMonth();
    const currDay = value.getDate();

    let tasks = [];

    if (calendarEvents[currMonth] !== undefined) {
      if (calendarEvents[currMonth][currDay] !== undefined) {
        tasks = calendarEvents[currMonth][currDay];
      }
    }

    return (
      <ul className="events">
        {tasks.map((item) => {
          const taskContent = item.taskContent;

          const todoStatusClass = item.completed ? "taskCompleted" : "";

          return (
            <li key={item.id}>
              <Badge
                className={todoStatusClass}
                status={taskContent.type}
                text={taskContent.content}
              />
            </li>
          );
        })}
      </ul>
    );
  }

  //console.log(todos);

  return (
    <div className="calendarTasks">
      <h2 className="PageHeader">Calendar</h2>
      <div className="CalendarContainer">
        <Calendar dateCellRender={dateCellRender} />
      </div>
    </div>
  );
}

function createCalendarEventsObj(todos) {
  const calendarEvents = {};
  todos.forEach((todo) => {
    // january will be represented by 0
    const month = Number(todo.date.slice(0, 2)) - 1;
    const day = Number(todo.date.slice(3, 5));
    //console.log(`Month: ${month}, day: ${day}`);
    const taskContent = { type: "success", content: todo.task };

    const calendarEvent = {
      id: todo.id,
      completed: todo.completed,
      taskContent,
    };

    if (!calendarEvents.hasOwnProperty(month)) {
      calendarEvents[month] = { [day]: [calendarEvent] };
    } else {
      if (!calendarEvents[month].hasOwnProperty(day)) {
        calendarEvents[month][day] = [calendarEvent];
      } else {
        calendarEvents[month][day].push(calendarEvent);
      }
    }
  });

  return calendarEvents;
}
