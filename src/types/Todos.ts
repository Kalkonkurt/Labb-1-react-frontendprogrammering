export type Todos = {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
};

export type TodoPayload = {
	todo: string;
	completed: boolean;
	userId: number;
};
