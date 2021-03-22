import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import CategorySelector from './components/CategorySelector';
import Scoreboard from './components/Scoreboard';
import Question from './components/Question';
import ResultModal from './components/ResultModal';

function App() {
	const [question, setQuestion] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState('any');
	const [isCorrect, setIsCorrect] = useState(null);
	const [winsCount, setWinsCount] = useState(0);
	const [lossesCount, setLossesCount] = useState(0);

	const getQuestion = useCallback(() => {
		setIsCorrect(null);
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

	const questionAnswerHandler = (answer) => {
		setIsCorrect(answer === question.correct_answer);
		if (answer === question.correct_answer) {
			setIsCorrect(true);
			setWinsCount((winsCount) => winsCount + 1);
		} else {
			setIsCorrect(false);
			setLossesCount((lossesCount) => lossesCount + 1);
		}
	};

	return (
		<div className='app'>
			{isCorrect !== null && (
				<ResultModal
					isCorrect={isCorrect}
					question={question}
					getQuestion={getQuestion}
				/>
			)}

			<div className='question-header'>
				<CategorySelector
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				<Scoreboard winsCount={winsCount} lossesCount={lossesCount} />
			</div>

			<div className='question-main'>
				{question && (
					<Question
						question={question}
						questionAnswerHandler={questionAnswerHandler}
					/>
				)}
			</div>

			<div className='question-footer'>
				<button onClick={getQuestion}>Go to next question 👉</button>
			</div>
		</div>
	);
}

export default App;
