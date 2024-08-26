import Image from 'next/image';

import Box from '../../Box';
import Pot from './Pot';
import Header from '../Header';

interface OverviewPotsProps {
	pots: {
		id: number;
		name: string;
		target: number;
		total: number;
		theme: string;
	}[];
}

const OverviewPots = ({ pots }: OverviewPotsProps) => {
	return (
		<Box>
			<Header name="Saving Pot" path="/pots" more="See details" />

			<section className="grid md:grid-cols-4 gap-5 pt-5 items-center">
				<article className="col-span-2 flex gap-4 p-4 items-center bg-beige-100 rounded-xl">
					<Image src="/icon-pot.svg" alt="icon" width={40} height={40} />
					<div className="space-y-[11px]">
						<h4 className="text-grey-500 text-sm leading-[150%]">
							Total saved
						</h4>
						<p className="text-grey-900 text-[32px] leading-[120%] font-bold">
							${pots.reduce((acc, pot) => acc + pot.total, 0)}
						</p>
					</div>
				</article>
				<article className="col-span-2 grid grid-flow-col grid-rows-2 gap-4">
					{pots.slice(0, 4).map((pot) => (
						<Pot
							key={pot.id}
							name={pot.name}
							value={pot.total}
							color={pot.theme}
						/>
					))}
				</article>
			</section>
		</Box>
	);
};

export default OverviewPots;
