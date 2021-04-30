import React, { Component } from "react";
import Todo from "./Components/Todo";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const todos = ["get on the bus", "take bin out"];

  return (
    <div className="App">
      <h1>Hello</h1>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}

export default App;
