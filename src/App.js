import React, { useEffect, useState } from 'react';
import './App.css';
import CategorySelector from './components/CategorySelector';
import Scoreboard from './components/Scoreboard';
import Question from './components/Question';

function App() {
	const [question, setQuestion] = useState(null);

	useEffect(() => {
		getQuestion();
	}, []);

	const getQuestion = () => {
		const url = 'https://opentdb.com/api.php?amount=1';
		fetch(url)
			.then((res) => res.json())
			.then((data) => setQuestion(data.results[0]));
	};

	return (
		<div className='app'>
			{/* <ResultModal /> */}

			<div className='question-header'>
				<CategorySelector />
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
