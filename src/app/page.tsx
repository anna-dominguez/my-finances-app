import Box from '@/components/Box';
import OverviewBudgets from '@/components/Overview/Budgets/OverviewBudgets';
import OverviewPots from '@/components/Overview/Pots/OverviewPots';
import OverviewRecurringBills from '@/components/Overview/Bills/OverviewRecurringBills';
import OverviewTransactions from '@/components/Overview/OverviewTransactions';

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
				<section className="grid grid-flow-row lg:grid-cols-5 gap-4 md:gap-6">
					<div className="lg:col-span-3 space-y-4 md:space-y-6">
						<OverviewPots />
						<OverviewTransactions />
					</div>
					<div className="lg:col-span-2 space-y-6">
						<OverviewBudgets />
						<OverviewRecurringBills />
					</div>
				</section>
			</main>
		</div>
	);
}
