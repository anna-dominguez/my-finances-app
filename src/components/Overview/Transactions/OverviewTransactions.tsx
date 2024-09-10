import React from 'react';
import Box from '@/components/Box';

import Header from '../Header';

import type { ITransaction } from '@/@types/transaction';
import Transaction from './Transaction';

interface OverviewTransactionsProps {
	transactions: ITransaction[];
}

const OverviewTransactions = ({ transactions }: OverviewTransactionsProps) => {
	return (
		<Box>
			<Header name="Transactions" path="/transactions" more="View All" />
			<section className="flex flex-col pt-8 gap-10">
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</section>
		</Box>
	);
};

export default OverviewTransactions;
