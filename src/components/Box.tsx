interface BoxProps {
	children: React.ReactNode;
	dark?: boolean;
}

const Box = ({ children, dark }: BoxProps) => {
	return (
		<article
			className={`${
				dark ? 'bg-grey-900 text-white' : 'bg-white'
			} rounded-xl p-5 md:p-6 space-y-3`}
		>
			{children}
		</article>
	);
};

export default Box;
