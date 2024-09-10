import Image from 'next/image';
import React from 'react';

const Search = () => {
	return (
		<article className="flex p-4 rounded-lg border border--beige-500">
			<input
				className="w-full placeholder:text-beige-500 placeholder:text-sm text-sm text-grey-900"
				type="text"
				placeholder="Search transactions"
			/>
			<Image src="/icon-search.svg" width={16} height={16} alt="Search" />
		</article>
	);
};

export default Search;
