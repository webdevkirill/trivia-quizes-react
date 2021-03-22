import { useCallback, useEffect, useState } from 'react';

export default function useQuize() {
	const [question, setQuestion] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState('any');
	const [isCorrect, setIsCorrect] = useState(null);

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

	return {
		question,
		selectedCategory,
		isCorrect,
		getQuestion,
		setSelectedCategory,
		setIsCorrect,
	};
}
