import axios from 'axios';
import type { TodoPayload } from '../types/Todos';

const API_URL = 'https://dummyjson.com/todos';

export const createTodo = async (payload: TodoPayload) => {
	try {
		await axios.post(`${API_URL}/add`, payload);
	} catch (error) {
		console.error('Error creating', error);
		throw error;
	}
};

export const fetchTodos = async () => {
	try {
		const response = await axios.get(`${API_URL}`);
		return response.data.todos;
	} catch (error) {
		console.log('Error fetching', error);
		throw error;
	}
};

export const completeTodo = async (id: number) => {
	try {
		await axios.put(`${API_URL}/${id}`, { completed: true });
	} catch (error) {
		console.log('Could not complete todo', error);
		throw error;
	}
};

export const deleteTodo = async (id: number) => {
	try {
		await axios.delete(`${API_URL}/${id}`);
	} catch (error) {
		console.log('Could not delete', error);
		throw error;
	}
};

export const updateTodo = async (id: number, todo: string) => {
	try {
		await axios.put(`${API_URL}/${id}`, { todo });
	} catch (error) {
		console.log('Could not update todo', error);
		throw error;
	}
};
