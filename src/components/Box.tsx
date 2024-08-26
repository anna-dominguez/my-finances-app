interface BoxProps {
	children: React.ReactNode;
	classname?: string;
	dark?: boolean;
}

const Box = ({ children, classname, dark }: BoxProps) => {
	return (
		<article
			className={`${classname} ${
				dark ? 'bg-grey-900 text-white' : 'bg-white'
			} rounded-xl p-5 md:p-6`}
		>
			{children}
		</article>
	);
};

export default Box;
