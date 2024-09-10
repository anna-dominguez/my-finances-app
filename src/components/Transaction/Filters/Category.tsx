interface CategoryProps {
	category: string;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Category = ({ category, setCategory }: CategoryProps) => {
	return (
		<div className="flex items-center gap-2">
			<p className="text-grey-500 text-sm leading-[150%]">Category</p>
			<select
				className="text-grey-900 text-sm leading-[150%] border-1 border-beige-500 rounded-lg p-2"
				value="all"
			>
				<option value="all">All Transactions</option>
				<option value="entertainment">Entertainment</option>
				<option value="bills">Bills</option>
				<option value="groceries">Groceries</option>
				<option value="dining-out">Dining Out</option>
				<option value="transportation">Transportation</option>
				<option value="personal-care">Personal Care</option>
				<option value="education">Education</option>
				<option value="lifestyle">Lifestyle</option>
				<option value="shopping">Shopping</option>
				<option value="general">General</option>
			</select>
		</div>
	);
};

export default Category;
