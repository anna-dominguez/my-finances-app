import React from 'react';
import Image from 'next/image';

import type { ITransaction } from '@/@types/transaction';

interface TransactionProps {
	transaction: ITransaction;
}

const Transaction = ({ transaction }: TransactionProps) => {
	return (
		<article className="flex justify-between">
			<div className="space-x-4 flex items-center">
				<Image
					className="rounded-full"
					src={transaction.avatar}
					alt="avatar"
					width={40}
					height={40}
				/>
				<p className="text-grey-900 font-bold text-sm leading-[150%]">
					{transaction.name}
				</p>
			</div>
			<div className="space-y-2">
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
				<p className="text-grey-500 text-xs">
					{transaction.date.toLocaleDateString('en-GB', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})}
				</p>
			</div>
		</article>
	);
};

export default Transaction;
