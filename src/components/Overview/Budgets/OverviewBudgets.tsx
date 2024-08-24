import React from 'react';
import Box from '../../Box';
import Header from '../Header';
import BudgetsChart from './BudgetsChart';

const OverviewBudgets = () => {
	return (
		<Box>
			<Header name="Budgets" path="/budgets" more="See details" />
			<section className="grid grid-cols-3">
				<article className="col-span-2">
					<BudgetsChart />
				</article>
				<div>TEST2</div>
			</section>
		</Box>
	);
};

export default OverviewBudgets;
