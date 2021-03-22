import React from 'react';
import { shuffleArray } from '../utils';

export default function Question({ question }) {
	const answers = shuffleArray([
		...question.incorrect_answers,
		question.correct_answer,
	]);
	console.log(answers);

	return (
		<div className='question'>
			<h2 dangerouslySetInnerHTML={{ __html: question.question }} />

			{answers.map((answer, index) => (
				<button key={index}>{answer}</button>
			))}
		</div>
	);
}
