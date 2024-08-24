import Box from '@/components/Box';
import IconCaretRight from '@/components/SVG/IconCaretRight';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex w-full min-h-screen">
			<main className="flex w-full min-h-screen flex-col px-10 py-8 space-y-8">
				<h2 className="text-[32px] leading-[120%] font-bold">Overview</h2>
				<section className="grid grid-flow-row md:grid-cols-3 gap-3 md:gap-5">
					<Box dark={true}>
						<h3 className="text-sm leading-[150%]">Current Balance</h3>
						<p className="text-[32px] leading-[120%] font-bold">$4,836.00</p>
					</Box>
					<Box>
						<h3 className="text-sm leading-[150%]">Income</h3>
						<p className="text-[32px] leading-[120%] font-bold">$3,814.25</p>
					</Box>
					<Box>
						<h3 className="text-sm leading-[150%]">Expenses</h3>
						<p className="text-[32px] leading-[120%] font-bold">1,700.50</p>
					</Box>
				</section>
				<section className="grid grid-cols-5 gap-6">
					<div className="col-span-3 space-y-6">
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
						</Box>
						<Box>
							<header className="flex items-center justify-between">
								<h3 className="text-xl font-bold leading-[120%] text-grey-900">
									Transactions
								</h3>
								<Link
									href="/transactions"
									className="flex items-center gap-4 group cursor-pointer"
								>
									<p className="text-sm leading-[150%] text-grey-500 group-hover:text-grey-900">
										View all
									</p>
									<IconCaretRight color="group-hover:text-grey-900" />
								</Link>
							</header>
						</Box>
					</div>
					<div className="col-span-2 space-y-6">
						<Box>
							<header className="flex items-center justify-between">
								<h3 className="text-xl font-bold leading-[120%] text-grey-900">
									My Budget
								</h3>
								<Link
									href="/budgets"
									className="flex items-center gap-4 group cursor-pointer"
								>
									<p className="text-sm leading-[150%] text-grey-500 group-hover:text-grey-900">
										See details
									</p>
									<IconCaretRight color="group-hover:text-grey-900" />
								</Link>
							</header>
						</Box>
						<Box>
							<header className="flex items-center justify-between">
								<h3 className="text-xl font-bold leading-[120%] text-grey-900">
									Recurring Bills
								</h3>
								<Link
									href="recurring-bills"
									className="flex items-center gap-4 group cursor-pointer"
								>
									<p className="text-sm leading-[150%] text-grey-500 group-hover:text-grey-900">
										See details
									</p>
									<IconCaretRight color="group-hover:text-grey-900" />
								</Link>
							</header>
						</Box>
					</div>
				</section>
			</main>
		</div>
	);
}
