import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayouts';
import App from './App';
import AddTodo from './components/AddTodo';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <App />
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
