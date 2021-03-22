import React from 'react';
import { categories } from '../categories';

export default function CategorySelector({
	selectedCategory,
	setSelectedCategory,
}) {
	return (
		<div className='category-selector'>
			<p>Select Category</p>
			<select
				value={selectedCategory}
				onChange={(e) => setSelectedCategory(e.target.value)}
			>
				{categories.map((category) => (
					<option
						key={category.id}
						value={category.id}
						dangerouslySetInnerHTML={{ __html: category.name }}
					/>
				))}
			</select>
		</div>
	);
}
