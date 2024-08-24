import React from 'react';
import Box from '../Box';
import Link from 'next/link';

import IconCaretRight from '../SVG/IconCaretRight';
import Header from './Header';

const OverviewTransactions = () => {
	return (
		<Box>
			<Header name="Transactions" path="/transactions" more="See details" />
		</Box>
	);
};

export default OverviewTransactions;
