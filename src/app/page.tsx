import OverviewBudgets from '@/components/Overview/Budgets/OverviewBudgets';
import OverviewPots from '@/components/Overview/Pots/OverviewPots';
import OverviewRecurringBills from '@/components/Overview/Bills/OverviewRecurringBills';
import OverviewTransactions from '@/components/Overview/Transactions/OverviewTransactions';
import HeaderData from '@/components/Overview/HeaderData/HeaderData';
import prisma from '@/lib/prisma';

const Home = async () => {
	const pots = await prisma.pot.findMany({ where: { userId: 1 } });
	const transactions = await prisma.transaction.findMany({
		where: { userId: 1 },
		take: 5,
	});
	const budgets = await prisma.budget.findMany({ where: { userId: 1 } });
	const recurringBills = await prisma.transaction.findMany({
		where: { recurring: true, userId: 1 },
	});

	return (
		<div className="flex w-full min-h-screen">
			<main className="flex w-full min-h-screen flex-col md:px-10 py-6 px-4 md:py-8 space-y-8">
				<h2 className="text-[32px] leading-[120%] font-bold">Overview</h2>
				<HeaderData />
				<section className="grid grid-flow-row lg:grid-cols-5 gap-4 md:gap-6">
					<div className="lg:col-span-3 space-y-4 md:space-y-6">
						<OverviewPots pots={pots} />
						<OverviewTransactions transactions={transactions} />
					</div>
					<div className="lg:col-span-2 space-y-4 md:space-y-6">
						<OverviewBudgets budgets={budgets} />
						<OverviewRecurringBills recurringBills={recurringBills} />
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
