import Box from '@/components/Box';
import Filters from '@/components/Transaction/Filters/Filters';
import React from 'react';
import prisma from '@/lib/prisma';
import type { ITransaction } from '@/@types/transaction';
import Link from 'next/link';
import TransactionDetails from '@/components/Transaction/TransactionDetails';
import Image from 'next/image';

interface TransactionsProps {
	searchParams: { page?: string };
}

const Transactions = async ({ searchParams }: TransactionsProps) => {
	const page = Number.parseInt(searchParams.page || '1', 10);
	const take = 10;
	const skip = (page - 1) * take;

	const transactions = await prisma.transaction.findMany({
		skip,
		take,
		orderBy: {
			date: 'desc',
		},
	});

	const totalTransactions = await prisma.transaction.count();
	const totalPages = Math.ceil(totalTransactions / take);

	return (
		<div className="flex w-full min-h-screen">
			<main className="flex w-full min-h-screen flex-col md:px-10 py-6 px-4 md:py-8 space-y-8">
				<header className="flex justify-between items-center">
					<h2 className="text-[32px] leading-[120%] font-bold">Transactions</h2>
				</header>
				<Box classname="space-y-6">
					<Filters />
					<section>
						<table className="w-full h-full">
							<thead className="hidden md:block text-grey-500 text-xs leading-[150%]">
								<tr className="grid grid-cols-2 md:grid-cols-5 items-center py-3 mb-6 md:border-b border-grey-200 px-4">
									<th className="hidden md:flex md:col-span-2 font-normal">
										Recipient / Sender
									</th>
									<th className="hidden md:flex font-normal">Category</th>
									<th className="hidden md:flex font-normal">
										Transaction Date
									</th>
									<th className="hidden md:block font-normal w-full text-right justify-self-end">
										Amount
									</th>
								</tr>
							</thead>
							<tbody className="space-y-4">
								{transactions.map((transaction) => (
									<tr
										key={transaction.id}
										className="grid grid-cols-2 md:grid-cols-5 items-center border-b border-grey-200 px-4"
									>
										<td className="md:col-span-2 gap-4 flex items-center">
											<Image
												className="rounded-full my-4"
												src={transaction.avatar}
												alt="avatar"
												width={40}
												height={40}
											/>
											<div className="flex flex-col">
												<p className="text-grey-900 font-bold text-sm leading-[150%]">
													{transaction.name}
												</p>
												<p className="md:hidden text-grey-500 text-xs leading-[150%]">
													{transaction.category}
												</p>
											</div>
										</td>
										<td className="hidden md:flex text-grey-500 text-xs leading-[150%]">
											{transaction.category}
										</td>
										<td className="hidden md:flex text-grey-500 text-xs leading-[150%]">
											{transaction.date.toLocaleDateString('en-GB', {
												day: 'numeric',
												month: 'short',
												year: 'numeric',
												hour: 'numeric',
												minute: 'numeric',
											})}
										</td>
										<td>
											<div className="space-y-2 text-right">
												<p
													className={`${
														transaction.amount > 0 ? 'text-green' : ''
													} font-bold text-sm leading-[150%]`}
												>
													{transaction.amount > 0 ? '+' : '-'}$
													{transaction.amount > 0
														? transaction.amount.toFixed(2)
														: (-transaction.amount).toFixed(2)}
												</p>
												<p className="md:hidden text-grey-500 text-xs leading-[150%]">
													{transaction.date.toLocaleDateString('en-GB', {
														day: 'numeric',
														month: 'short',
														year: 'numeric',
													})}
												</p>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>

						{/* <ul className="space-y-6">
							{transactions.map((transaction) => (
								<TransactionDetails
									key={transaction.id}
									transaction={transaction}
								/>
							))}
						</ul> */}
					</section>
					<section className="flex justify-between items-center">
						{page > 1 && (
							<Link href={`/transactions?page=${page - 1}`}>Previous</Link>
						)}
						<span>
							Page {page} of {totalPages}
						</span>
						{page < totalPages && (
							<Link href={`/transactions?page=${page + 1}`}>Next</Link>
						)}
					</section>
				</Box>
			</main>
		</div>
	);
};

export default Transactions;
