import Box from '../../Box';
import React from 'react';
import Header from '../Header';
import Bill from './Bill';

const OverviewRecurringBills = () => {
	return (
		<Box>
			<Header
				name="Recurring Bills"
				path="/recurring-bills"
				more="See details"
			/>

			<section className="space-y-3 pt-8">
				<Bill name="Paid Bills" value={190.0} color="green" />
				<Bill name="Total Upcoming" value={194.98} color="yellow" />
				<Bill name="Due Soon" value={59.98} color="cyan" />
			</section>
		</Box>
	);
};

export default OverviewRecurringBills;
