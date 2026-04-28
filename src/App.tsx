import './App.css';
import { useEffect, useState } from 'react';
import type { Todos, TodoPayload } from './types/Todos';
import { fetchTodos } from './services/services';
import axios from 'axios';

function App() {
	const [todos, setTodos] = useState<Todos[]>([]);
	const [payload, setPayload] = useState<TodoPayload>({ title: '', description: '' });

	useEffect(() => {
		const loadTodos = async () => {
			const todos = await fetchTodos();
			setTodos(todos);
		};
		loadTodos();
	}, []);

	const API_URL = 'https://dummyjson.com/todos';
	const createTodos = async (todoPayload: TodoPayload) => {
		try {
			const response = await axios.post(`${API_URL}, todosPayload`);
			setTodos((prevTodos) => [...prevTodos, response.data.todos]);
		} catch (error) {
			console.error('Error creating', error);
		}
	};
	return (
		<>
			<h1>TO DO'S</h1>
			<section className="demo-section">
				<form className="demo-form">
					<input
						type="text"
						placeholder="write a Todo"
						value={payload.title}
						onChange={(e) => setPayload({ ...payload, ['title']: e.target.value })}
					/>

					<textarea
						value={payload.description}
						onChange={(e) => setPayload({ ...payload, ['title']: e.target.value })}
						placeholder="Do something nice"
						rows={4}
					></textarea>
				</form>
			</section>
			<ul>
				{todos.map((todos) => (
					<li key={todos.id}>
						<h3>{todos.todo}</h3>
						<p>{todos.userId}</p>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
