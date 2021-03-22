import React from 'react';
import './App.css';
import { categories } from './categories';

function App() {
	return (
		<div className='app'>
			<div className='question-header'>
				<div className='category-selector'>
					<p>Select Category</p>
					<select>
						{categories.map((category, index) => (
							<option key={index} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
				</div>
				<div className='scoreboard'>
					<div className='wrong'>
						<strong>0</strong>
						<span>wrong</span>
					</div>
					<div className='correct'>
						<strong>0</strong>
						<span>correct</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
