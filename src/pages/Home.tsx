import '../App.css';
import { useEffect, useState } from 'react';
import type { Todos } from '../types/Todos';
import { fetchTodos, completeTodo } from '../services/services';
import DropDown from '../components/DropDown';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function Home() {
	const [todos, setTodos] = useState<Todos[]>([]);
	const [filter, setFilter] = useState<'all' | 'a-z'>('all');

	const completedTodos = todos
		.filter((todo) => todo.completed)
		.sort((a, b) => (filter === 'a-z' ? a.todo.localeCompare(b.todo) : 0));
	const uncompletedTodos = todos
		.filter((todo) => !todo.completed)
		.sort((a, b) => (filter === 'a-z' ? a.todo.localeCompare(b.todo) : 0));

	useEffect(() => {
		const loadTodos = async () => {
			const allTodos = await fetchTodos();
			setTodos(allTodos);
		};
		loadTodos();
	}, []);

	const handleComplete = async (id: number) => {
		await completeTodo(id);
		setTodos((prev) =>
			prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
		);
	};

	return (
		<>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2, marginRight: '2rem' }}>
				<DropDown onChange={(value) => setFilter(value as 'all' | 'a-z')} />
			</Box>
			<Typography
				variant="h3"
				sx={{
					color: '#ffffff',
					backgroundColor: '#040404',
					borderRadius: '6rem',
					margin: '0 12rem'
				}}
			>
				To do
			</Typography>
			<Grid container spacing={2} sx={{ padding: 8 }}>
				{uncompletedTodos.map((todo) => (
					<Grid size={4} key={todo.id}>
						<Card
							sx={{
								borderRadius: 5,
								backgroundColor: '#e9caa3a4',
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
									control={<Checkbox onChange={() => handleComplete(todo.id)} />}
									label="Done"
								/>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
			<Typography
				variant="h3"
				sx={{
					color: '#ffffff',
					backgroundColor: '#040404',
					borderRadius: '6rem',
					margin: '0 12rem'
				}}
			>
				Done Todos
			</Typography>
			<Grid container spacing={2} sx={{ padding: 8 }}>
				{completedTodos.map((todo) => (
					<Grid size={4} key={todo.id}>
						<Card
							sx={{
								borderRadius: 5,
								backgroundColor: '#57a94e99',
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
									control={<Checkbox onChange={() => handleComplete(todo.id)} />}
									label="Undone"
								/>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default Home;
