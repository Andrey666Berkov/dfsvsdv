import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
	const todos = [
		{ id: 1, completed: false, title: "Kupit Xleb" },
		{ id: 2, completed: false, title: "Kupit Maslo" },
		{ id: 3, completed: false, title: "Kupit Moloko" },
	];

	return (
		<div className="wrapper">
			<h1>React Tutorial</h1>
			<TodoList massiv={todos} />
		</div>
	);
}

export default App;
