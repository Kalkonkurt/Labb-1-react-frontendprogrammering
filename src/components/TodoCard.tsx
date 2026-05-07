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
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

type Props = {
	todo: Todos;
	onComplete: (id: number) => void;
	onDelete: (id: number) => void;
	onEdit: (id: number, newText: string) => void;
};

function TodoCard({ todo, onComplete, onDelete, onEdit }: Props) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
	const handleClose = () => setAnchorEl(null);
	const [openDialog, setOpenDialog] = useState(false);

	const [openEdit, setOpenEdit] = useState(false);
	const [editText, setEditText] = useState(todo.todo);

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
					<MenuItem
						onClick={() => {
							handleClose();
							setOpenEdit(true);
						}}
					>
						Edit
					</MenuItem>
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
				<DialogTitle sx={{ color: '#0a0a0a' }}>Radera todo?</DialogTitle>
				<DialogActions>
					<Button sx={{ color: '#0a0a0a' }} onClick={() => setOpenDialog(false)}>
						Avbryt
					</Button>
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
			<Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
				<DialogTitle sx={{ color: '#0a0a0a' }}>Redigera todo</DialogTitle>
				<DialogContent>
					<TextField value={editText} onChange={(e) => setEditText(e.target.value)} />
				</DialogContent>
				<DialogActions>
					<Button sx={{ color: '#ff0000' }} onClick={() => setOpenEdit(false)}>
						Avbryt
					</Button>
					<Button
						sx={{ color: '#0a0a0a' }}
						onClick={() => {
							onEdit(todo.id, editText);
							setOpenEdit(false);
						}}
					>
						Spara
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
