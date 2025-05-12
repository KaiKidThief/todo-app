import React, { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Header from "./Header";
import ParticleBg from "./ParticleBg";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Header />
      <Form todos={todos} setTodos={setTodos} />

      {/* <ParticleBg /> */}

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
