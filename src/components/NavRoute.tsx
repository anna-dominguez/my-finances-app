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
			className={`px-7 py-3 group ${isMinimal ? 'w-fit' : 'w-[276px]'} ${
				isActive
					? 'border-l-4 border-l-green bg-beige-100 text-grey-900 rounded-r-xl'
					: 'border-l-4 border-l-transparent'
			}`}
		>
			<Link className="flex gap-3  items-center" href={path}>
				<Icon color={isActive ? 'fill-green' : 'group-hover:fill-white'} />
				{!isMinimal && (
					<p className={!isActive ? 'group-hover:text-white' : ''}>{name}</p>
				)}
			</Link>
		</li>
	);
};

export default NavRoute;
