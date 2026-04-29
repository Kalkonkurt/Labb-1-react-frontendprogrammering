import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayouts';
import App from './App';
import AddTodo from './components/AddTodo';

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
	}
]);

export default router;
