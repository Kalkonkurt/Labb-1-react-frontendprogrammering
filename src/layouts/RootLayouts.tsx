import { Link, Outlet } from 'react-router-dom';
import '../App.css';
function RootLayout() {
	return (
		<div>
			<nav className="navbar">
				<Link to="/">Home</Link>
				<Link to="/AddTodo">Add Todo</Link>
			</nav>
			<Outlet />
		</div>
	);
}
export default RootLayout;
