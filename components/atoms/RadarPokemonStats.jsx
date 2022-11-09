import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { LoadingScreen } from './LoadingScreen';

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

export const RadarPokemonStats = ({ stats }) => {
	if (!stats) {
		return <LoadingScreen />;
	}

	let statsNames = [];
	let statsNumbers = [];

	stats.map((stat) => {
		statsNames.push(stat.stat.name);
		statsNumbers.push(stat.base_stat);
	});

	const radarData = {
		labels: statsNames,
		datasets: [
			{
				label: 'Stats',
				data: statsNumbers,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
			},
		],
	};
	const options = {
		cutout: '80%',
		scales: {
			r: {
				min: 0,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	return (
		<>
			<Radar data={radarData} options={options} />
		</>
	);
};
