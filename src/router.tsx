import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayouts';
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'AddTodo',
				element: <AddTodo />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
]);

export default router;
