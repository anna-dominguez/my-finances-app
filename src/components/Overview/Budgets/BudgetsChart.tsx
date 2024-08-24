'use client';

const BudgetsChart = () => {
	const data = [
		{ value: 50, color: '#277C78' },
		{ value: 750, color: '#82C9D7' },
		{ value: 75, color: '#F2CDAC' },
		{ value: 100, color: '#626070' },
		{ value: 100, color: '#626070' },
	];

	const total = data.reduce((sum, { value }) => sum + value, 0);

	const getPercentage = (value: number) => (value / total) * 100;

	return (
		<div className="relative w-full max-w-[240px]">
			<div className="w-full h-full">
				<svg viewBox="0 0 32 32">
					{data.map((segment, index) => {
						const offset = data
							.slice(0, index)
							.reduce((sum, { value }) => sum + getPercentage(value), 0);
						const strokeDasharray = `${getPercentage(segment.value)} ${
							100 - getPercentage(segment.value)
						}`;

						return (
							<circle
								key={index}
								cx="16"
								cy="16"
								r="14"
								stroke={segment.color}
								strokeWidth="4"
								fill="none"
								strokeDasharray={strokeDasharray}
								strokeDashoffset={`${100 - offset}`}
								transform="rotate(-90 16 16)"
							/>
						);
					})}
				</svg>
			</div>
			<div className="absolute inset-0 flex flex-col items-center justify-center">
				<p className="text-[32px] font-bold text-grey-900">$338</p>
				<p className="text-xs leading-[150%] text-grey-500">of $975 limit</p>
			</div>
		</div>
	);
};

export default BudgetsChart;
