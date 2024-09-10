import React from 'react';
import Box from '../../Box';
import Header from '../Header';
import BudgetsChart from '../../Budget/BudgetsChart';
import Pot from '../Pots/Pot';
import prisma from '@/lib/prisma';

interface OverviewBudgetsProps {
	budgets: {
		id: number;
		category: string;
		maximum: number;
		theme: string;
	}[];
}

const OverviewBudgets = async ({ budgets }: OverviewBudgetsProps) => {
	const limit = budgets.reduce((acc, budget) => acc + budget.maximum, 0);
	const transactions = await prisma.transaction.findMany({
		where: {
			userId: 1,
			OR: budgets.map((budget) => {
				return { category: budget.category };
			}),
		},
	});

	const data = budgets.map((budget) => {
		const value = transactions
			.filter((transaction) => transaction.category === budget.category)
			.reduce((acc, transaction) => acc + transaction.amount, 0);

		return { value, color: budget.theme };
	});

	console.log(data);

	return (
		<Box>
			<Header name="Budgets" path="/budgets" more="See Details" />
			<section className="grid grid-flow-row md:grid-cols-3 pt-7 pb-2 gap-4 items-center justify-center md:justify-start">
				<article className="col-span-2">
					<BudgetsChart limit={limit} data={data} />
				</article>
				<div className="grid grid-cols-2 md:grid-cols-1 gap-4">
					{budgets.map((budget) => (
						<Pot
							key={budget.id}
							name={budget.category}
							value={transactions.reduce((acc, transaction) => {
								if (transaction.category === budget.category) {
									return acc + -transaction.amount;
								}
								return acc;
							}, 0)}
							color={budget.theme}
						/>
					))}
				</div>
			</section>
		</Box>
	);
};

export default OverviewBudgets;
