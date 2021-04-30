import React, { Component } from "react";
import Todo from "./Components/Todo";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const todos = ["get on the bus", "take bin out"];

  return (
    <div>
      <h1> Hello</h1>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}
export default App;
