import type { Todos } from '../types/Todos';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

type Props = {
	todo: Todos;
	onComplete: (id: number) => void;
};

function TodoCard({ todo, onComplete }: Props) {
	return (
		<Card
			sx={{
				borderRadius: 5,
				backgroundColor: todo.completed ? '#57a94e99' : '#e9caa3a4',
				minHeight: 220,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<CardContent sx={{ textAlign: 'center' }}>
				<ListItemText
					primary={todo.todo}
					slotProps={{
						primary: {
							style: {
								color: '#040404',
								fontWeight: 550,
								fontSize: '1.2rem'
							}
						}
					}}
				/>
				<FormControlLabel
					control={<Checkbox checked={todo.completed} onChange={() => onComplete(todo.id)} />}
					label={todo.completed ? 'Undone' : 'Done'}
				/>
			</CardContent>
		</Card>
	);
}

export default TodoCard;
