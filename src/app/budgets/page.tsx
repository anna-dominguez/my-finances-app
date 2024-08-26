import type { IBudget } from '@/@types/budget';
import Box from '@/components/Box';
import BudgetContent from '@/components/Budget/BudgetContent';
import BudgetsChart from '@/components/Budget/BudgetsChart';
import Summary from '@/components/Budget/Summary';
import prisma from '@/lib/prisma';
import React from 'react';

const Budgets = async () => {
	const budgets = await prisma.budget.findMany({ where: { userId: 1 } });
	console.log('budget', budgets);

	const limit = budgets.reduce(
		(acc: number, budget: IBudget) => acc + budget.maximum,
		0
	);

	return (
		<div className="flex w-full min-h-screen">
			<main className="flex w-full min-h-screen flex-col md:px-10 py-6 px-4 md:py-8 space-y-8">
				<header className="flex justify-between items-center">
					<h2 className="text-[32px] leading-[120%] font-bold">Budgets</h2>
					<button
						className="bg-grey-900 text-white text-sm leading-[150%] font-bold p-4 rounded-lg"
						type="button"
					>
						+ Add New Budget
					</button>
				</header>
				<div className="grid grid-flow-row lg:grid-cols-5 gap-6">
					<section className="lg:col-span-2">
						<Box classname="flex w-full flex-col md:grid md:grid-cols-2 lg:flex lg:grid-cols-0 lg:flex-col">
							<div className="flex justify-center md:justify-normal lg:justify-center">
								<BudgetsChart limit={limit} />
							</div>
							<div className="space-y-6">
								<h3 className="text-grey-900 font-bold text-xl leading-[120%]">
									Spending Summary
								</h3>
								{budgets.map((budget: IBudget) => (
									<Summary key={budget.id} budget={budget} />
								))}
							</div>
						</Box>
					</section>
					<section className="lg:col-span-3 flex flex-col gap-6">
						{budgets.map((budget: IBudget) => (
							<Box key={budget.id}>
								<BudgetContent budget={budget} />
							</Box>
						))}
					</section>
				</div>
			</main>
		</div>
	);
};

export default Budgets;
