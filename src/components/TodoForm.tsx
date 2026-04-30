import { useState } from 'react';
import type { TodoPayload } from '../types/Todos';

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
				<input
					type="text"
					placeholder="write a Todo"
					value={payload.todo}
					onChange={(e) => setPayload({ ...payload, todo: e.target.value })}
				/>

				<input
					type="number"
					placeholder=" User ID"
					value={payload.userId}
					onChange={(e) => setPayload({ ...payload, userId: Number(e.target.value) })}
				/>
				<button type="submit">Add Todo</button>
			</form>
		</>
	);
}
export default TodoForm;
