import React from 'react';
import Data from './Data';

const HeaderData = () => {
	return (
		<section className="grid grid-flow-row md:grid-cols-3 gap-3 md:gap-5">
			<Data dark={true} name="Current Balance" value="4,836.00" />
			<Data name="Income" value="3,814.25" />
			<Data name="Expenses" value="1,700.50" />
		</section>
	);
};

export default HeaderData;
