'use client';

import { useState } from 'react';
import Search from './Search';
import SortBy from './SortBy';
import Category from './Category';

const Filters = () => {
	const [sortBy, setSortBy] = useState('Latest');
	const [category, setCategory] = useState('all');

	return (
		<section className="flex justify-between items-center">
			<Search />
			<article className="flex gap-6">
				<SortBy sortBy={sortBy} setSortBy={setSortBy} />
				<Category category={category} setCategory={setCategory} />
			</article>
		</section>
	);
};

export default Filters;
