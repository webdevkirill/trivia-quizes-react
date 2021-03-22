import React from 'react';
import './App.css';
import CategorySelector from './components/CategorySelector';
import Scoreboard from './components/Scoreboard';
import Question from './components/Question';
import ResultModal from './components/ResultModal';
import useQuize from './hooks/useQuize';

function App() {
	const {
		question,
		selectedCategory,
		isCorrect,
		getQuestion,
		setSelectedCategory,
		setIsCorrect,
	} = useQuize();

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
				<Scoreboard isCorrect={isCorrect} />
			</div>

			<div className='question-main'>
				{question && (
					<Question
						question={question}
						questionAnswerHandler={(answer) =>
							setIsCorrect(answer === question.correct_answer)
						}
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
