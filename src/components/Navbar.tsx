'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import IconOverview from './SVG/IconOverview';
import IconTransactions from './SVG/IconTransactions';
import IconBudgets from './SVG/IconBudgets';
import IconPots from './SVG/IconPots';
import IconRecurringBills from './SVG/IconRecurringBills';
import Image from 'next/image';
import IconMinimizeMenu from './SVG/IconMinimizeMenu';
import NavRoute from './NavRoute';

const Navbar = () => {
	const pathname = usePathname();
	const [isMinimal, setIsMinimal] = React.useState(false);

	const isActive = (path: string) => pathname === path;

	return (
		<header
			className={`bg-grey-900 text-slate-300 ${
				isMinimal ? 'w-[88px]' : 'min-w-[300px]'
			} rounded-r-2xl flex flex-col justify-between`}
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
					<ul>
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
			<div className="flex py-10 px-8">
				<div
					className="text-grey-300 flex gap-3 items-center cursor-pointer group"
					onClick={() => setIsMinimal(!isMinimal)}
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
