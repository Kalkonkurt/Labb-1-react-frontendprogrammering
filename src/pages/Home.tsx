import '../App.css';
import { useEffect, useState } from 'react';
import type { Todos } from '../types/Todos';
import { fetchTodos } from '../services/services';
import DropDown from '../components/DropDown';

function Home() {
	const [todos, setTodos] = useState<Todos[]>([]);
	const [filter, setFilter] = useState<'all' | 'a-z'>('all');

	const completedTodos = todos
		.filter((todo) => todo.completed)
		.sort((a, b) => (filter === 'a-z' ? a.todo.localeCompare(b.todo) : 0));
	const uncompletedTodos = todos
		.filter((todo) => !todo.completed)
		.sort((a, b) => (filter === 'a-z' ? a.todo.localeCompare(b.todo) : 0));

	useEffect(() => {
		const loadTodos = async () => {
			const allTodos = await fetchTodos();
			setTodos(allTodos);
		};
		loadTodos();
	}, []);

	return (
		<>
			<DropDown onChange={(value) => setFilter(value as 'all' | 'a-z')}></DropDown>
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
