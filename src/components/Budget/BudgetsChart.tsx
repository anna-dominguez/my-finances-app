'use client';

interface BudgetsChartProps {
	limit: number;
	data: {
		value: number;
		color: string;
	}[];
}

const BudgetsChart = ({ limit, data }: BudgetsChartProps) => {
	const total = data.reduce((sum, { value }) => sum + value, 0);

	const getPercentage = (value: number) => (value / total) * 100;

	return (
		<div className="relative w-full max-w-[240px]">
			<div className="w-full h-full">
				<svg viewBox="0 0 32 32">
					{data.map((segment, index) => {
						// Calculer le pourcentage pour le segment actuel
						const segmentPercentage = getPercentage(segment.value);
						// Calculer l'offset cumulé en pourcentage
						const offset = data
							.slice(0, index)
							.reduce((sum, { value }) => sum + getPercentage(value), 0);

						const strokeDasharray = `${segmentPercentage} ${
							100 - segmentPercentage
						}`;
						const strokeDashoffset = index === 0 ? 0 : 100 - offset;
						console.log(offset, strokeDasharray, strokeDashoffset, segment);

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
								strokeDashoffset={strokeDashoffset}
								transform="rotate(-90 16 16)"
							/>
						);
					})}
				</svg>
			</div>
			<div className="absolute inset-0 flex flex-col items-center justify-center">
				<p className="text-[32px] font-bold text-grey-900">${-total}</p>
				<p className="text-xs leading-[150%] text-grey-500">
					of ${limit} limit
				</p>
			</div>
		</div>
	);
};

export default BudgetsChart;
