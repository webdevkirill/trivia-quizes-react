import React from 'react';
import './App.css';
import CategorySelector from './components/CategorySelector';
import Scoreboard from './components/Scoreboard';

function App() {
	return (
		<div className='app'>
			<div className='question-header'>
				<CategorySelector />
				<Scoreboard />
			</div>
		</div>
	);
}

export default App;
