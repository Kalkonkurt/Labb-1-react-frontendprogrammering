import './App.css';
import { useEffect, useState } from 'react';
import type { Todos, TodoPayload } from './types/Todos';
import { fetchTodos } from './services/services';
import axios from 'axios';
import AddTodo from './components/AddTodo';

function App() {
	const [todos, setTodos] = useState<Todos[]>([]);

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

export default App;
