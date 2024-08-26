export interface ITransaction {
	id: number;
	avatar: string;
	name: string;
	category: string;
	date: date;
	amount: number;
	recurring: boolean;
	userId: number;
}
