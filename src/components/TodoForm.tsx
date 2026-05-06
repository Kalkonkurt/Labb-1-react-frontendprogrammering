import { useState } from 'react';
import type { TodoPayload } from '../types/Todos';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Props = {
	onSubmit: (payload: TodoPayload) => void;
};

function TodoForm({ onSubmit }: Props) {
	const [payload, setPayload] = useState<TodoPayload>({ todo: '', completed: false, userId: 1 });
	return (
		<>
			<form
				className="demo-form"
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit(payload);
				}}
			>
				<TextField
					label="Write a Todo"
					variant="outlined"
					value={payload.todo}
					onChange={(e) => setPayload({ ...payload, todo: e.target.value })}
				/>
				<TextField
					label="User ID"
					variant="outlined"
					type="number"
					value={payload.userId}
					onChange={(e) => setPayload({ ...payload, userId: Number(e.target.value) })}
				/>
				<Button type="submit" variant="contained">Add Todo</Button>
			</form>
		</>
	);
}
export default TodoForm;
