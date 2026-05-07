import { useState } from 'react';
import type { Todos } from '../types/Todos';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

type Props = {
	todo: Todos;
	onComplete: (id: number) => void;
	onDelete: (id: number) => void;
};

function TodoCard({ todo, onComplete, onDelete }: Props) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
	const handleClose = () => setAnchorEl(null);
	const [openDialog, setOpenDialog] = useState(false);

	return (
		<Card
			sx={{
				borderRadius: 5,
				backgroundColor: todo.completed ? '#57a94e99' : '#e9caa3a4',
				minHeight: 220,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'relative'
			}}
		>
			<Box sx={{ position: 'absolute', top: 8, right: 8 }}>
				<IconButton onClick={handleOpen}>
					<MoreVertIcon />
				</IconButton>
				<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
					<MenuItem onClick={handleClose}>Edit</MenuItem>
					<MenuItem
						onClick={() => {
							handleClose();
							setOpenDialog(true);
						}}
					>
						Delete
					</MenuItem>
				</Menu>
			</Box>
			<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
				<DialogTitle>Radera todo?</DialogTitle>
				<DialogActions>
					<Button onClick={() => setOpenDialog(false)}>Avbryt</Button>
					<Button
						color="error"
						onClick={() => {
							onDelete(todo.id);
							setOpenDialog(false);
						}}
					>
						Radera
					</Button>
				</DialogActions>
			</Dialog>
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
					label={todo.completed ? 'Do it again' : 'Done'}
				/>
			</CardContent>
		</Card>
	);
}

export default TodoCard;
