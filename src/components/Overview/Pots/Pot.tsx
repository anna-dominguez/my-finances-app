import React from 'react';

interface PotProps {
	name: string;
	value: number;
	color: string;
}

const Pot = ({ name, value, color }: PotProps) => {
	return (
		<article className="flex gap-4">
			<div
				style={{ backgroundColor: color }}
				className="h-full w-1 rounded-lg"
			/>
			<div className="flex flex-col">
				<h4 className="text-xs leading-[150%] text-grey-500">{name}</h4>
				<p className="text-grey-900 font-bold text-sm">${value}</p>
			</div>
		</article>
	);
};

export default Pot;
