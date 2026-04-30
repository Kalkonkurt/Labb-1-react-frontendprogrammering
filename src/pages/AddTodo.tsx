import type { TodoPayload } from '../types/Todos';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TodoForm from '../components/TodoForm';

function AddTodo() {
	const navigate = useNavigate();

	const API_URL = 'https://dummyjson.com/todos/add';

	const createTodos = async (payload: TodoPayload) => {
		try {
			await axios.post(`${API_URL}`, payload);
			navigate(-1);
		} catch (error) {
			console.error('Error creating', error);
		} finally {
			console.log(payload);
		}
	};

	return (
		<section className="demo-section">
			<button onClick={() => navigate(-1)}>Go back</button>
			<TodoForm onSubmit={createTodos}></TodoForm>
		</section>
	);
}

export default AddTodo;
