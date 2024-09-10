import React from 'react';
import prisma from '@/lib/prisma';
import Box from '@/components/Box';
import PotContent from '@/components/Pot/PotContent';

const Pots = async () => {
	const pots = await prisma.pot.findMany({ where: { userId: 1 } });

	return (
		<div className="flex w-full min-h-screen">
			<main className="flex w-full min-h-screen flex-col md:px-10 py-6 px-4 md:py-8 space-y-8">
				<header className="flex justify-between items-center">
					<h2 className="text-[32px] leading-[120%] font-bold">Pots</h2>
					<button
						className="bg-grey-900 text-white text-sm leading-[150%] font-bold p-4 rounded-lg"
						type="button"
					>
						+ Add New Pot
					</button>
				</header>
				<div className="grid grid-flow-row lg:grid-cols-2 gap-6">
					{pots.map((pot) => (
						<PotContent key={pot.id} pot={pot} />
					))}
				</div>
			</main>
		</div>
	);
};

export default Pots;
