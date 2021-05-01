import React, { Component } from "react";
import Todo from "./Components/Todo";
import { useState, useEffect } from "react";
import "./App.css";

//initial value and state
const initialState = ["get on the bus", "take bin out"];

function App() {
  const [todos, setTodos] = useState(initialState);
  // user input values
  const [inputValue, setInputValue] = useState("");

  function removeTodo(todo) {
    setTodos(todos.filter((td) => td !== todo));
  }

  // everytime the user puts information it will change because of on change, on change is set to empty because we dont know what user will put in
  return (
    <div>
      <h1> Todo List</h1>
      <div>
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            //add todo
            setTodos([...todos, inputValue]);
            // clean up the field
            setInputValue("");
          }}
        >
          Add todo
        </button>
      </div>
      {todos.map((todo) => (
        <Todo todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}
export default App;
