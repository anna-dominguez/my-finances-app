import type { IPot } from '@/@types/pots';
import React from 'react';
import Box from '../Box';

interface PotContentProps {
	pot: IPot;
}

const PotContent = ({ pot }: PotContentProps) => {
	const percentage = (pot.total / pot.target) * 100;

	return (
		<Box classname="space-y-8">
			<header className="flex items-center gap-4">
				<div
					style={{ backgroundColor: pot.theme }}
					className="w-4 h-4 rounded-full"
				/>
				<h3 className="text-grey-900 font-bold text-xl leading-[120%]">
					{pot.name}
				</h3>
			</header>
			<section className="space-y-4">
				<article className="flex justify-between items-center">
					<p className="text-grey-500 text-sm leading-[150%]">Total Saved</p>
					<p className="font-bold text-grey-900 text-[32px] leading-[120%]">
						${pot.total}
					</p>
				</article>
				<article className="flex flex-col gap-[13px]">
					<div className="bg-beige-100 w-full h-2 rounded-[4px]">
						<div
							style={{
								backgroundColor: pot.theme,
								width: `${percentage < 100 ? percentage : '100'}%`,
							}}
							className="h-full rounded-[4px]"
						/>
					</div>
					<div className="flex justify-between">
						<p className="text-grey-500 text-xs font-bold leading-[150%]">
							{percentage.toFixed(2)}%
						</p>
						<p className="text-grey-500 text-xs leading-[120%]">
							Target of ${pot.target}
						</p>
					</div>
				</article>
			</section>
			<section className="text-grey-900 grid grid-cols-2 border-2 border-transparent text-center gap-4">
				<div className="bg-beige-100 p-4 hover:border-2 hover:border-beige-500 hover:bg-white rounded-lg">
					<p className="font-bold text-sm leading-[150%]">+ Add Money</p>
				</div>
				<div className="bg-beige-100 p-4 hover:border-2 hover:border-beige-500 hover:bg-white rounded-lg">
					<p className="font-bold text-sm leading-[150%]">Withdraw</p>
				</div>
			</section>
		</Box>
	);
};

export default PotContent;
