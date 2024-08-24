import Link from 'next/link';
import Image from 'next/image';

import Box from '../Box';
import IconCaretRight from '../SVG/IconCaretRight';
import Pot from './Pot';

const OverviewPots = () => {
	return (
		<Box>
			<header className="flex items-center justify-between">
				<h3 className="text-xl font-bold leading-[120%] text-grey-900">
					Saving Pot
				</h3>
				<Link
					href="/pots"
					className="flex items-center gap-4 group cursor-pointer"
				>
					<p className="text-sm leading-[150%] text-grey-500 group-hover:text-grey-900">
						See details
					</p>
					<IconCaretRight color="group-hover:text-grey-900" />
				</Link>
			</header>
			<section className="grid md:grid-cols-4 gap-5 items-center">
				<article className="col-span-2 flex gap-4 p-4 items-center bg-beige-100 rounded-xl">
					<Image src="/icon-pot.svg" alt="icon" width={40} height={40} />
					<div className="space-y-[11px]">
						<h4 className="text-grey-500 text-sm leading-[150%]">
							Total saved
						</h4>
						<p className="text-grey-900 text-[32px] leading-[120%] font-bold">
							$850
						</p>
					</div>
				</article>
				<article className="col-span-2 flex flex-col gap-4">
					<div className="grid grid-cols-2">
						<Pot name="Savings" value={159} color="green" />
						<Pot name="Gift" value={40} color="cyan" />
					</div>
					<div className="grid grid-cols-2">
						<Pot name="Concert Ticket" value={110} color="navy" />
						<Pot name="New Laptop" value={10} color="yellow" />
					</div>
				</article>
			</section>
		</Box>
	);
};

export default OverviewPots;
