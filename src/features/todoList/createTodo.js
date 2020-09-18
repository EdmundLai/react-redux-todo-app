import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Input } from "antd";
import { useHistory } from "react-router-dom";
import DatePicker from "../../components/DatePicker";
import format from "date-fns/format";

import { todoAdded } from "./todosSlice";

export function CreateTodo() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const dateFormat = "MM/dd/yyyy";

  const currentDate = format(new Date(), dateFormat);

  const [task, setTask] = useState("");
  const [date, setDate] = useState(currentDate);

  const dispatch = useDispatch();
  const history = useHistory();

  const onTaskChanged = (e) => setTask(e.target.value);

  function onAddTodoClicked() {
    if (task && date) {
      dispatch(todoAdded({ task, date }));
    }
    history.push("/");
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function onChangeDate(date, dateString) {
    setDate(dateString);
    //console.log(date, dateString);
  }

  return (
    <div className="createTodo">
      <div className="createTodoContent">
        <h2 className="createTodoHeader">Create a new Todo</h2>
        <Form
          {...layout}
          name="TodoForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Todo Task">
            <Input
              type="text"
              id="todoTask"
              name="todoTask"
              value={task}
              onChange={onTaskChanged}
            />
          </Form.Item>
          <Form.Item>
            <DatePicker
              onChange={onChangeDate}
              defaultValue={new Date()}
              format={dateFormat}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" onClick={onAddTodoClicked}>
              Add Todo!
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
