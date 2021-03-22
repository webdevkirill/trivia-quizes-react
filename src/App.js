import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import CategorySelector from './components/CategorySelector';
import Scoreboard from './components/Scoreboard';
import Question from './components/Question';

function App() {
	const [question, setQuestion] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState('any');

	const getQuestion = useCallback(() => {
		let url = 'https://opentdb.com/api.php?amount=1';
		if (selectedCategory !== 'any') {
			url += `&category=${selectedCategory}`;
		}

		fetch(url)
			.then((res) => res.json())
			.then((data) => setQuestion(data.results[0]));
	}, [selectedCategory]);

	useEffect(() => {
		getQuestion();
	}, [getQuestion]);

	return (
		<div className='app'>
			{/* <ResultModal /> */}

			<div className='question-header'>
				<CategorySelector
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				<Scoreboard />
			</div>

			<div className='question-main'>
				{question && <Question question={question} />}
			</div>

			<div className='question-footer'>
				<button>Go to next question 👉</button>
			</div>
		</div>
	);
}

export default App;
