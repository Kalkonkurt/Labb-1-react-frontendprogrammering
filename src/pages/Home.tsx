import '../App.css';
import { useEffect, useState } from 'react';
import type { Todos } from '../types/Todos';
import { fetchTodos } from '../services/services';

function Home() {
	const [todos, setTodos] = useState<Todos[]>([]);
	const [completedTodos, setCompletedTodos] = useState<Todos[]>([]);
	const [uncompletedTodos, setUncompletedTodos] = useState<Todos[]>([]);

	useEffect(() => {
		const loadTodos = async () => {
			const allTodos = await fetchTodos();
			setTodos(allTodos);
		};
		loadTodos();
	}, []);

	useEffect(() => {
		setCompletedTodos(todos.filter((todo) => todo.completed));
		setUncompletedTodos(todos.filter((todo) => !todo.completed));
	}, [todos]);

	return (
		<>
			<h1>TO DO'S</h1>

			<h2>To do</h2>
			<ul>
				{uncompletedTodos.map((todo) => (
					<li key={todo.id}>
						<h3>{todo.todo}</h3>
					</li>
				))}
			</ul>
			<h2>Done Todos</h2>
			<ul className="doneTodos">
				{completedTodos.map((todo) => (
					<li key={todo.id}>
						<h3>{todo.todo}</h3>
					</li>
				))}
			</ul>
		</>
	);
}

export default Home;
