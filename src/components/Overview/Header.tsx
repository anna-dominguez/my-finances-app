import Link from 'next/link';
import React from 'react';
import IconCaretRight from '../SVG/IconCaretRight';

interface HeaderProps {
	name: string;
	path: string;
	more: string;
}

const Header = ({ name, path, more }: HeaderProps) => {
	return (
		<header className="flex items-center justify-between">
			<h3 className="text-xl font-bold leading-[120%] text-grey-900">{name}</h3>
			<Link
				href={path}
				className="flex items-center gap-4 group cursor-pointer"
			>
				<p className="text-sm leading-[150%] text-grey-500 group-hover:text-grey-900">
					{more}
				</p>
				<IconCaretRight color="group-hover:fill-grey-900" />
			</Link>
		</header>
	);
};

export default Header;
