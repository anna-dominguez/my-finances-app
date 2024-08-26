import React from 'react';
import Box from '../../Box';
import Header from '../Header';
import BudgetsChart from '../../Budget/BudgetsChart';
import Pot from '../Pots/Pot';

interface OverviewBudgetsProps {
	budgets: {
		id: number;
		category: string;
		maximum: number;
		theme: string;
	}[];
}

const OverviewBudgets = ({ budgets }: OverviewBudgetsProps) => {
	const limit = budgets.reduce((acc, budget) => acc + budget.maximum, 0);

	return (
		<Box>
			<Header name="Budgets" path="/budgets" more="See details" />
			<section className="grid grid-flow-row md:grid-cols-3 pt-7 pb-2 gap-4 items-center justify-center md:justify-start">
				<article className="col-span-2">
					<BudgetsChart limit={limit} />
				</article>
				<div className="grid grid-cols-2 md:grid-cols-1 gap-4">
					{budgets.map((budget) => (
						<Pot
							key={budget.id}
							name={budget.category}
							value={budget.maximum}
							color={budget.theme}
						/>
					))}
				</div>
			</section>
		</Box>
	);
};

export default OverviewBudgets;
