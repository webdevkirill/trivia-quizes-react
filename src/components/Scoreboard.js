import React, { useEffect, useState } from 'react';

export default function Scoreboard({ isCorrect }) {
	const [winsCount, setWinsCount] = useState(0);
	const [lossesCount, setLossesCount] = useState(0);

	useEffect(() => {
		if (isCorrect === null) {
			return;
		}

		if (isCorrect === true) {
			setWinsCount((wins) => wins + 1);
		} else {
			setLossesCount((losses) => losses + 1);
		}
	}, [isCorrect]);

	return (
		<div className='scoreboard'>
			<div className='wrong'>
				<strong>{lossesCount}</strong>
				<span>wrong</span>
			</div>
			<div className='correct'>
				<strong>{winsCount}</strong>
				<span>correct</span>
			</div>
		</div>
	);
}
