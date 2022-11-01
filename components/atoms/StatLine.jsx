import React from "react";

const StatLine = ({ statValue, statName }) => {
	let statValue2 = Math.round(statValue, 1);

	return (
		<div className="border h-6 border-poke-ligth1 bg-poke-ligth1 relative">
			<p className="absolute top-0 left-2">{statName}</p>
			<progress
				id="file"
				max="150"
				value={statValue}
				className="progress w-full h-full"
			/>
		</div>
	);
};

export default StatLine;
