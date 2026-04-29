import { useState } from 'react';
import type { TodoPayload } from '../types/Todos';
import { useNavigate } from 'react-router-dom';

function AddTodo() {
	const [payload, setPayload] = useState<TodoPayload>({ title: '', description: '' });
	const navigate = useNavigate();
	return (
		<section className="demo-section">
			<button onClick={() => navigate(-1)}>Go back</button>
			<form className="demo-form">
				<input
					type="text"
					placeholder="write a Todo"
					value={payload.title}
					onChange={(e) => setPayload({ ...payload, ['title']: e.target.value })}
				/>

				<textarea
					value={payload.description}
					onChange={(e) => setPayload({ ...payload, ['description']: e.target.value })}
					placeholder="Do something nice"
					rows={4}
				></textarea>
			</form>
		</section>
	);
}

export default AddTodo;
