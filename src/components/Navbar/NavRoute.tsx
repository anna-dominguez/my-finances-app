import Link from 'next/link';

interface NavRouteProps {
	isMinimal: boolean;
	isActive: boolean;
	name: string;
	path: string;
	Icon: ({ color }: { color: string }) => React.JSX.Element;
}

const NavRoute = ({ isMinimal, isActive, name, path, Icon }: NavRouteProps) => {
	return (
		<li
			className={`lg:px-7 lg:py-3 group w-full ${
				isMinimal ? 'w-fit' : 'w-[276px]'
			} ${
				isActive
					? 'border-b-4 border-b-green lg:border-b-0 lg:border-l-4 lg:border-l-green bg-beige-100 text-grey-900 rounded-t-xl lg:rounded-t-none lg:rounded-tr-xl lg:rounded-r-xl'
					: 'border-l-4 border-l-transparent'
			}`}
		>
			<Link
				className="flex gap-1 lg:gap-3 flex-col lg:flex-row items-center pt-2 pb-3 lg:p-0"
				href={path}
			>
				<Icon color={isActive ? 'fill-green' : 'group-hover:fill-white'} />
				{!isMinimal ? (
					<p
						className={
							!isActive
								? 'group-hover:text-white md:flex hidden'
								: 'md:flex hidden'
						}
					>
						{name}
					</p>
				) : (
					<p
						className={`group-hover:text-white hidden md:flex ${
							isMinimal ? 'lg:hidden' : ''
						}`}
					>
						{name}
					</p>
				)}
			</Link>
		</li>
	);
};

export default NavRoute;
