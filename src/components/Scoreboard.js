import React from 'react';

export default function Scoreboard({ winsCount, lossesCount }) {
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
