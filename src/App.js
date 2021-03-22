import React from 'react';
import './App.css';
import CategorySelector from './components/CategorySelector';
import Scoreboard from './components/Scoreboard';
import Question from './components/Question';

function App() {
	return (
		<div className='app'>
			{/* <ResultModal /> */}

			<div className='question-header'>
				<CategorySelector />
				<Scoreboard />
			</div>

			<div className='question-main'>
				<Question />
			</div>

			<div className='question-footer'>
				<button>Go to next question 👉</button>
			</div>
		</div>
	);
}

export default App;
