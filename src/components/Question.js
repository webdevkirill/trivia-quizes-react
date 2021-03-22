import React from 'react';
import { shuffleArray } from '../utils';

export default function Question({ question, questionAnswerHandler }) {
	const answers = shuffleArray([
		...question.incorrect_answers,
		question.correct_answer,
	]);

	return (
		<div className='question'>
			<h2 dangerouslySetInnerHTML={{ __html: question.question }} />

			{answers.map((answer, index) => (
				<button
					key={index}
					dangerouslySetInnerHTML={{ __html: answer }}
					onClick={() => questionAnswerHandler(answer)}
				/>
			))}
		</div>
	);
}
