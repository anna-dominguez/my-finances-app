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
	const paidBills = recurringBills.filter((bill) => bill.amount < 0);
	const upcomingBills = recurringBills.filter((bill) => bill.amount > 0);
	const dueSoonBills = upcomingBills.filter(
		(bill) =>
			Date.now() && new Date(bill.date).getTime() - Date.now() < 604800000
	);

	const paidBillsTotal = paidBills.reduce((acc, bill) => acc + -bill.amount, 0);
	const upcomingBillsTotal = upcomingBills.reduce(
		(acc, bill) => acc + -bill.amount,
		0
	);
	const dueSoonBillsTotal = dueSoonBills.reduce(
		(acc, bill) => acc + -bill.amount,
		0
	);

	return (
		<Box>
			<Header
				name="Recurring Bills"
				path="/recurring-bills"
				more="See Details"
			/>

			<section className="space-y-3 pt-8">
				<Bill name="Paid Bills" value={paidBillsTotal} color="#277C78" />
				<Bill
					name="Total Upcoming"
					value={upcomingBillsTotal}
					color="#F2CDAC"
				/>
				<Bill name="Due Soon" value={dueSoonBillsTotal} color="#82C9D7" />
			</section>
		</Box>
	);
};

export default OverviewRecurringBills;
