import { Link, Outlet } from 'react-router-dom';
import '../App.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function RootLayout() {
	return (
		<Box sx={{ minHeight: '100vh', backgroundColor: '#EAE9F7' }}>
			<AppBar
				position="static"
				sx={{
					minHeight: 80,
					gap: 2,
					paddingX: 4,
					backgroundColor: '#d9887f'
				}}
			>
				<Toolbar sx={{ gap: '1rem' }}>
					<Typography
						variant="h1"
						sx={{
							color: '#fffff',
							flexGrow: 1,
							fontWeight: 500
						}}
					>
						ProcrastiNot
					</Typography>
					<Button
						color="inherit"
						component={Link}
						to="/"
						sx={{
							color: '#fffff',
							backgroundColor: '#040404',
							fontWeight: 600,
							borderRadius: '2rem',
							padding: '1rem'
						}}
					>
						Home
					</Button>
					<Button
						color="inherit"
						component={Link}
						to="/AddTodo"
						sx={{
							color: '#fffff',
							backgroundColor: '#040404',
							fontWeight: 600,
							borderRadius: '2rem',
							padding: '1rem'
						}}
					>
						Add Todo
					</Button>
				</Toolbar>
			</AppBar>
			<Outlet />
		</Box>
	);
}
export default RootLayout;
