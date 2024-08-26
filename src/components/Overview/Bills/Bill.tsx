import React from 'react';

interface BillProps {
	name: string;
	value: number;
	color: string;
}

const Bill = ({ name, value, color }: BillProps) => {
	return (
		<article
			style={{ borderColor: color }}
			className="flex bg-beige-100 justify-between py-5 px-4 border-l-4 rounded-lg text-sm leading-[150%]"
		>
			<h3 className="text-grey-500">{name}</h3>
			<p className="text-grey-900 font-bold text-sm">${value}</p>
		</article>
	);
};

export default Bill;
