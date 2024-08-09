import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Clock1 from "./Clock1";
import TodoApp from "./todoApp/TodoApp";
import Form from "./Form";
import Image from "./Image";


// adding class conditionally, turn button border green when selected
const App = () => {

  return (
    <>
    <TodoApp name="Todo List" />
    </>
  );
};

export default App;
