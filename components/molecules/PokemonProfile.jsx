import Image from 'next/image';
import capitalizeCase from '../../helpers/Capitalize.helper';
import { LoadingScreen } from '../atoms/LoadingScreen';
import unknownImg from '/public/img/unknown-pokemon.png';

export const PokemonProfile = ({ data }) => {
	if (!data) {
		return <LoadingScreen />;
	}
	const { name, types, sprites } = data;
	if (!name || !types || !sprites) {
		return <LoadingScreen />;
	}

	return (
		<div className="flex flex-col bg-poke-ligth1/5 h-fit rounded-md shadow-lg">
			<div className="py-4 px-8">
				<h1 className="text-2xl font-semibold mb-3">{capitalizeCase(name)}</h1>
				<ul className="flex gap-2">
					{types.map((typeObj) => (
						<li
							key={typeObj.type.url}
							className={`${
								typeObj.type.name && 'background-poke-type-' + typeObj.type.name
							} inline-block p-1 rounded-md`}
						>
							<p className="text-shadow">{typeObj.type.name}</p>
						</li>
					))}
				</ul>
			</div>
			<Image
				className={`${
					sprites.front_default !== null ? '' : 'opacity-20'
				} w-full min-w-[150px] max-w-[320px] hover:scale-110 transition-all m-auto px-2 py-4`}
				src={
					sprites.front_default !== null ? sprites.front_default : unknownImg
				}
				width="170"
				height="170"
				alt="Pokemon image"
			/>
		</div>
	);
};
