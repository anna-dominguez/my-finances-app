import Box from '../../Box';
import React from 'react';
import Header from '../Header';
import Bill from './Bill';

import type { ITransaction } from '@/@types/transaction';

interface OverviewRecurringBillsProps {
	recurringBills: ITransaction[];
}

const OverviewRecurringBills = ({
	recurringBills,
}: OverviewRecurringBillsProps) => {
	return (
		<Box>
			<Header
				name="Recurring Bills"
				path="/recurring-bills"
				more="See details"
			/>

			<section className="space-y-3 pt-8">
				<Bill name="Paid Bills" value={190.0} color="#277C78" />
				<Bill name="Total Upcoming" value={194.98} color="#F2CDAC" />
				<Bill name="Due Soon" value={59.98} color="#82C9D7" />
			</section>
		</Box>
	);
};

export default OverviewRecurringBills;
