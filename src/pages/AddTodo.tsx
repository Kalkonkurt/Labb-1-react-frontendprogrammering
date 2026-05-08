import type { TodoPayload } from '../types/Todos';
import { useNavigate } from 'react-router-dom';
import { createTodo } from '../services/services';
import TodoForm from '../components/TodoForm';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function AddTodo() {
	const navigate = useNavigate();

	const createTodos = async (payload: TodoPayload) => {
		await createTodo(payload);
		// Dialog 'todo created'
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
