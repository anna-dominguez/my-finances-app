import React from 'react';
import Box from '../Box';
import BudgetsChart from './BudgetsChart';
import Summary from './Summary';
import prisma from '@/lib/prisma';
import type { IBudget } from '@/@types/budget';

interface SpendingSummaryProps {
	budgets: IBudget[];
}

const SpendingSummary = async ({ budgets }: SpendingSummaryProps) => {
	const transactions = await prisma.transaction.findMany({
		where: {
			userId: 1,
			OR: budgets.map((budget: IBudget) => {
				return { category: budget.category };
			}),
		},
	});

	const limit = budgets.reduce(
		(acc: number, budget: IBudget) => acc + budget.maximum,
		0
	);

	const data = budgets.map((budget: IBudget) => {
		const value = transactions
			.filter((transaction) => transaction.category === budget.category)
			.reduce((acc, transaction) => acc + transaction.amount, 0);

		return { value, color: budget.theme };
	});

	return (
		<Box classname="flex w-full flex-col md:grid md:grid-cols-2 lg:flex lg:grid-cols-0 lg:flex-col">
			<div className="flex justify-center md:justify-normal lg:justify-center">
				<BudgetsChart limit={limit} data={data} />
			</div>
			<div className="space-y-6 pt-8">
				<h3 className="text-grey-900 font-bold text-xl leading-[120%]">
					Spending Summary
				</h3>
				{budgets.map((budget: IBudget) => (
					<Summary key={budget.id} budget={budget} />
				))}
			</div>
		</Box>
	);
};

export default SpendingSummary;
