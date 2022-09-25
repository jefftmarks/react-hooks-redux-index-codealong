import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

function TodoContainer() {
	const todos = useSelector((state) => state.todos.entities);

	const todoList = todos.map((todo, index) => (
		<Todo key={index} text={todo} />
	))

  return <ul>{todoList}</ul>;
}

export default TodoContainer;
