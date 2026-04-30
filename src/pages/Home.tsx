import '../App.css';
import { useEffect, useState } from 'react';
import type { Todos } from '../types/Todos';
import { fetchTodos } from '../services/services';

function Home() {
	const [todos, setTodos] = useState<Todos[]>([]);

	useEffect(() => {
		const loadTodos = async () => {
			const todos = await fetchTodos();
			setTodos(todos);
		};
		loadTodos();
	}, []);

	return (
		<>
			<h1>TO DO'S</h1>
			<ul>
				{todos.map((todos) => (
					<li key={todos.id}>
						<h3>{todos.todo}</h3>
					</li>
				))}
			</ul>
		</>
	);
}

export default Home;
