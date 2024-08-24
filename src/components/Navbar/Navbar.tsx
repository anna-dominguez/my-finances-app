'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import IconOverview from '../SVG/IconOverview';
import IconTransactions from '../SVG/IconTransactions';
import IconBudgets from '../SVG/IconBudgets';
import IconPots from '../SVG/IconPots';
import IconRecurringBills from '../SVG/IconRecurringBills';
import Image from 'next/image';
import IconMinimizeMenu from '../SVG/IconMinimizeMenu';
import NavRoute from './NavRoute';

const Navbar = () => {
	const pathname = usePathname();
	const [isMinimal, setIsMinimal] = useState(false);

	const isActive = (path: string) => pathname === path;

	return (
		<header
			className={`bg-grey-900 text-slate-300 sticky bottom-0 h-fit w-full lg:w-fit lg:h-screen lg:top-0 z-50 ${
				isMinimal ? 'w-[88px]' : 'min-w-[300px]'
			} rounded-t-lg lg:rounded-t-none lg:rounded-tr-2xl lg:rounded-r-2xl flex flex-col justify-between`}
		>
			<div className="flex flex-col">
				<div className="hidden lg:block px-8 py-10 ">
					{isMinimal ? (
						<Image width={12} height={21} src="/logo-small.svg" alt="logo" />
					) : (
						<Image width={121} height={21} src="/logo-large.svg" alt="logo" />
					)}
				</div>
				<nav className="font-bold leading-[150%] text-grey-300">
					<ul className="flex justify-between lg:flex-col pt-2 px-10 lg:px-0 lg:pr-2">
						<NavRoute
							isMinimal={isMinimal}
							isActive={isActive('/')}
							name="Overview"
							path="/"
							Icon={IconOverview}
						/>
						<NavRoute
							isMinimal={isMinimal}
							isActive={isActive('/transactions')}
							name="Transactions"
							path="/transactions"
							Icon={IconTransactions}
						/>
						<NavRoute
							isMinimal={isMinimal}
							isActive={isActive('/budgets')}
							name="Budgets"
							path="/budgets"
							Icon={IconBudgets}
						/>
						<NavRoute
							isMinimal={isMinimal}
							isActive={isActive('/pots')}
							name="Pots"
							path="/pots"
							Icon={IconPots}
						/>
						<NavRoute
							isMinimal={isMinimal}
							isActive={isActive('/recurring-bills')}
							name="Recurring Bills"
							path="/recurring-bills"
							Icon={IconRecurringBills}
						/>
					</ul>
				</nav>
			</div>
			<div className="py-10 px-8 hidden lg:flex">
				<div
					className="text-grey-300 flex gap-3 items-center cursor-pointer group"
					onClick={() => setIsMinimal(!isMinimal)}
					onKeyDown={() => setIsMinimal(!isMinimal)}
				>
					{isMinimal ? (
						<IconMinimizeMenu
							className="scale-x-neg"
							color="group-hover:fill-white"
						/>
					) : (
						<>
							<IconMinimizeMenu color="group-hover:fill-white" />
							<p className="group-hover:text-white">Minimize Menu</p>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
