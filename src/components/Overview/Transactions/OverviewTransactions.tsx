import React from 'react';
import Box from '@/components/Box';

import Header from '../Header';

const OverviewTransactions = () => {
	return (
		<Box>
			<Header name="Transactions" path="/transactions" more="See details" />
		</Box>
	);
};

export default OverviewTransactions;
