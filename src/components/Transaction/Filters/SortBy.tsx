import Image from 'next/image';
import { useState } from 'react';

interface SortByProps {
	sortBy: string;
	setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const SortBy = ({ sortBy, setSortBy }: SortByProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex items-center gap-2 relative">
			<p className="text-grey-500 text-sm leading-[150%]">Sort by</p>
			<button
				className="text-grey-900 text-sm leading-[150%] border border-beige-500 rounded-lg p-2"
				type="button"
				onClick={() => setIsOpen(!isOpen)}
			>
				{sortBy}
			</button>
			{isOpen && (
				<div className="absolute top-[130%]  bg-white shadow-lg rounded-lg py-3 px-5">
					<ul className="space-y-6 w-[114px]">
						{['Latest', 'Oldest', 'A to Z', 'Z to A', 'Highest', 'Lowest'].map(
							(sort) => (
								<li
									key={sort}
									className={`text-grey-900 text-sm leading-[150%] p-2 ${
										sortBy === sort ? 'font-bold' : ''
									}`}
								>
									<button
										className="w-full text-left"
										type="button"
										onClick={() => {
											setSortBy(sort);
											setIsOpen(false);
										}}
									>
										{sort}
									</button>
								</li>
							)
						)}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SortBy;
