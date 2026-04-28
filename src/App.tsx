import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Todos } from './types/Todos';

function App() {
	const [todos, setTodos] = useState<Todos[]>([]);

	const API_URL = 'https://dummyjson.com/todos';

	const fetchTodos = async () => {
		try {
			const response = await axios.get(`${API_URL}`);
			console.log(response);
			console.log(response.data);
			setTodos(response.data.todos);
		} catch (error) {
			console.log('Error fetching', error);
		}
	};
	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<>
			<ul>
				{todos.map((todos) => (
					<li key={todos.id}>
						<h3>{todos.todo}</h3>
						<p>{todos.completed}</p>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
