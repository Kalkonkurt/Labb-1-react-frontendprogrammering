import type { TodoPayload } from '../types/Todos';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TodoForm from '../components/TodoForm';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
		<section>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					paddingLeft: '4rem',
					marginTop: '1rem'
				}}
			>
				<Button variant="outlined" onClick={() => navigate(-1)}>
					Go back
				</Button>
			</Box>
			<TodoForm onSubmit={createTodos}></TodoForm>
		</section>
	);
}

export default AddTodo;
