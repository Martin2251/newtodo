import React from "react";

export default function Todo(props) {
  return (
    <div className="todo">
      <p>{props.todo}</p>
      <button>X</button>
    </div>
  );
}
