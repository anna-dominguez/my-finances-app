import type { IBudget } from '@/@types/budget';
import type { ITransaction } from '@/@types/transaction';
import prisma from '@/lib/prisma';
import React from 'react';

interface BudgetContentProps {
	budget: IBudget;
}

const BudgetContent = async ({ budget }: BudgetContentProps) => {
	const transactions = await prisma.transaction.findMany({
		where: { category: budget.category, userId: 1 },
	});

	const spent = transactions.reduce(
		(acc: number, transaction: ITransaction) => acc + transaction.amount,
		0
	);
	const remaining = budget.maximum - spent;

	return (
		<div className="space-y-5">
			<header className="flex items-center gap-4">
				<div
					style={{ backgroundColor: budget.theme }}
					className="w-4 h-4 rounded-full"
				/>
				<h3 className="text-grey-900 font-bold text-xl leading-[120%]">
					{budget.category}
				</h3>
			</header>
			<section className="space-y-4">
				<p className="text-sm text-grey-500 leading-[150%]">
					Maximum of ${budget.maximum.toFixed(2)}
				</p>
				<article></article>
				<div className="grid grid-cols-2">
					<article className="flex gap-4">
						<div
							style={{ backgroundColor: budget.theme }}
							className="h-full w-1 rounded-lg"
						/>
						<div>
							<p className="text-xs leading-[150%] text-grey-500">Spent</p>
							<p className="font-bold text-sm leading-[150%]">
								${(-spent).toFixed(2)}
							</p>
						</div>
					</article>
					<article className="flex gap-4">
						<div className="h-full w-1 rounded-lg bg-beige-100" />
						<div>
							<p className="text-xs leading-[150%] text-grey-500">Remaining</p>
							<p>${remaining.toFixed(2)}</p>
						</div>
					</article>
				</div>
			</section>
			<section></section>
		</div>
	);
};

export default BudgetContent;
