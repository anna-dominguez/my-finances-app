import React from 'react';
import Box from '../../Box';
import Header from '../Header';
import BudgetsChart from './BudgetsChart';
import Pot from '../Pots/Pot';

const OverviewBudgets = () => {
	return (
		<Box>
			<Header name="Budgets" path="/budgets" more="See details" />
			<section className="grid grid-flow-row md:grid-cols-3 pt-7 pb-2 gap-4 items-center justify-center md:justify-start">
				<article className="col-span-2">
					<BudgetsChart />
				</article>
				<div className="grid grid-cols-2 md:grid-cols-1 gap-4">
					<Pot name="Entertainment" value={50.0} color="green" />
					<Pot name="Bills" value={750.0} color="cyan" />
					<Pot name="Dining Out" value={75.0} color="yellow" />
					<Pot name="Personal Care" value={100.0} color="navy" />
				</div>
			</section>
		</Box>
	);
};

export default OverviewBudgets;
