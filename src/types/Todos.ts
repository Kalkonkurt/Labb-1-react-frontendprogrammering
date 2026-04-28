export type Todos = {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
};

export type TodoPayload = {
	title: string;
	description: string;
};
