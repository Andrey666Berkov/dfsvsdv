import PropTypes from "prop-types";
import React from "react";
import TodoItem from "./TodoItem";

const styles = {
	ul: {
		listStyle: "none",
		margin: 0,
		padding: 0,
	},
};

function TodoList(props) {
	return (
		<ul style={styles.ul}>
			{props.massiv.map((c, i) => {
				return <TodoItem todo={c} key={c.id} index={i} />;
			})}
		</ul>
	);
}

TodoList.PropTypes = {
	todos: PropTypes.array,
};

export default TodoList;
