import axios from 'axios';

const API_URL = 'https://dummyjson.com/todos';

export const fetchTodos = async () => {
	try {
		const response = await axios.get(`${API_URL}`);
		return response.data.todos;
	} catch (error) {
		console.log('Error fetching', error);
	}
};

export const completeTodo = async (id: number) => {
	await axios.put(`${API_URL}/${id}`, { completed: true });
};
