import '../App.css';
import { useEffect, useState } from 'react';
import type { Todos } from '../types/Todos';
import { fetchTodos, completeTodo, deleteTodo } from '../services/services';
import DropDown from '../components/DropDown';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TodoCard from '../components/TodoCard';
import CircularProgress from '@mui/material/CircularProgress';

function Home() {
	const [todos, setTodos] = useState<Todos[]>([]);
	const [filter, setFilter] = useState<'all' | 'a-z'>('all');
	const [loading, setLoading] = useState(true);

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
			setLoading(false);
		};
		loadTodos();
	}, []);

	if (loading) return <CircularProgress />;

	const handleComplete = async (id: number) => {
		await completeTodo(id);
		setTodos((prev) =>
			prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
		);
	};

	const handleDelete = async (id: number) => {
		await deleteTodo(id);
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const renderTodos = (todos: Todos[]) => (
		<Grid container spacing={2} sx={{ padding: 8 }}>
			{todos.map((todo) => (
				<Grid size={4} key={todo.id}>
					<TodoCard todo={todo} onComplete={handleComplete} onDelete={handleDelete} />
				</Grid>
			))}
		</Grid>
	);
	const renderHeader = (title: string) => (
		<Typography
			variant="h3"
			sx={{
				color: '#ffffff',
				backgroundColor: '#040404',
				borderRadius: '6rem',
				margin: '0 12rem'
			}}
		>
			{title}
		</Typography>
	);
	return (
		<>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2, marginRight: '2rem' }}>
				<DropDown onChange={(value) => setFilter(value as 'all' | 'a-z')} />
			</Box>
			{renderHeader('To do')}
			{renderTodos(uncompletedTodos)}
			{renderHeader('Done Todos')}
			{renderTodos(completedTodos)}
		</>
	);
}

export default Home;
