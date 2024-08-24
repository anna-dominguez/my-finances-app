import Box from '@/components/Box';

interface DataProps {
	dark?: boolean;
	name: string;
	value: string;
}

const Data = ({ dark = false, name, value }: DataProps) => {
	return (
		<Box dark={dark}>
			<h3 className="text-sm leading-[150%]">{name}</h3>
			<p className="text-[32px] leading-[120%] font-bold">${value}</p>
		</Box>
	);
};

export default Data;
