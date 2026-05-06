import { useState } from 'react';
import type { TodoPayload } from '../types/Todos';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type Props = {
	onSubmit: (payload: TodoPayload) => void;
};

function TodoForm({ onSubmit }: Props) {
	const [payload, setPayload] = useState<TodoPayload>({ todo: '', completed: false, userId: 1 });
	return (
		<>
			<Typography
				variant="h3"
				sx={{
					color: '#ffffff',
					backgroundColor: '#040404',
					borderRadius: '6rem',
					margin: '0 12rem'
				}}
			>
				Create Todo
			</Typography>
			<Card
				sx={{
					borderRadius: 5,
					backgroundColor: '#e9caa3a4',
					minHeight: 220,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					maxWidth: 400,
					margin: '2rem auto'
				}}
			>
				<CardContent sx={{ textAlign: 'center', width: '100%' }}>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							onSubmit(payload);
						}}
						style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
					>
						<TextField
							placeholder="Don't forget to floss"
							variant="outlined"
							slotProps={{ htmlInput: { style: { textAlign: 'center' } } }}
							value={payload.todo}
							onChange={(e) => setPayload({ ...payload, todo: e.target.value })}
						/>
						<Button
							type="submit"
							variant="contained"
							sx={{
								backgroundColor: '#040404',
								width: 'fit-content',
								alignSelf: 'center',
								padding: '0.5 1rem'
							}}
						>
							Add Todo
						</Button>
					</form>
				</CardContent>
			</Card>
		</>
	);
}
export default TodoForm;
