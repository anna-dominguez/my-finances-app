import type { IBudget } from '@/@types/budget';
import type { ITransaction } from '@/@types/transaction';
import prisma from '@/lib/prisma';
import React from 'react';

interface SummaryProps {
	budget: IBudget;
}

const Summary = async ({ budget }: SummaryProps) => {
	const transactions = await prisma.transaction.findMany({
		where: { category: budget.category, userId: 1 },
	});

	const totalAmount = transactions.reduce(
		(acc: number, transaction: ITransaction) => acc + transaction.amount,
		0
	);

	return (
		<article className="flex justify-between items-center">
			<div className="flex gap-4">
				<div
					style={{ backgroundColor: budget.theme }}
					className="h-full w-1 rounded-lg"
				/>
				<p className="text-grey-500 text-sm leading-[150%]">
					{budget.category}
				</p>
			</div>
			<div className="flex gap-2 items-center">
				<p className="font-bold leading-[150%]">${(-totalAmount).toFixed(2)}</p>
				<p className="text-grey-500 text-xs leading-[150%]">
					of ${budget.maximum}
				</p>
			</div>
		</article>
	);
};

export default Summary;
