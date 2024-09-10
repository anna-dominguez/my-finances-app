import type { IBudget } from '@/@types/budget';
import type { ITransaction } from '@/@types/transaction';
import prisma from '@/lib/prisma';
import React from 'react';
import IconCaretRight from '../SVG/IconCaretRight';
import Box from '../Box';
import Transaction from '../Overview/Transactions/Transaction';
import percentage from '@/utils/percentage';

interface BudgetContentProps {
	budget: IBudget;
}

const BudgetContent = async ({ budget }: BudgetContentProps) => {
	const transactions = await prisma.transaction.findMany({
		where: { category: budget.category, userId: 1 },
	});

	const spent = transactions.reduce(
		(acc: number, transaction: ITransaction) => acc + -transaction.amount,
		0
	);
	const remaining = budget.maximum - spent;

	const budgetPercentage = percentage(spent, budget.maximum);

	return (
		<Box classname="space-y-5">
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
				<article className="bg-beige-100 rounded-[4px] h-[32px] p-1">
					<div
						style={{
							backgroundColor: budget.theme,
							width: `${budgetPercentage < 100 ? budgetPercentage : '100'}%`,
						}}
						className="h-full rounded-[4px]"
					/>
				</article>
				<div className="grid grid-cols-2">
					<article className="flex gap-4">
						<div
							style={{ backgroundColor: budget.theme }}
							className="h-full w-1 rounded-lg"
						/>
						<div>
							<p className="text-xs leading-[150%] text-grey-500">Spent</p>
							<p className="font-bold text-sm leading-[150%]">
								${spent.toFixed(2)}
							</p>
						</div>
					</article>
					<article className="flex gap-4">
						<div className="h-full w-1 rounded-lg bg-beige-100" />
						<div>
							<p className="text-xs leading-[150%] text-grey-500">Remaining</p>
							<p className="font-bold text-sm leading-[150%]">
								${remaining > 0 ? remaining.toFixed(2) : 0}
							</p>
						</div>
					</article>
				</div>
			</section>
			<section className="bg-beige-100 p-5 rounded-xl">
				<header className="flex justify-between items-center">
					<h4 className="text-grey-900 font-bold text-lg leading-[120%]">
						Latest Spending
					</h4>
					<div className="flex items-center gap-4 text-sm text-grey-500 group cursor-pointer">
						<p className="group-hover:text-grey-900">See All</p>
						<IconCaretRight color="group-hover:fill-grey-900" />
					</div>
				</header>
				<section className="pt-5 space-y-6">
					{transactions.slice(0, 4).map((transaction) => (
						<Transaction key={transaction.id} transaction={transaction} />
					))}
				</section>
			</section>
		</Box>
	);
};

export default BudgetContent;
