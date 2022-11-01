import { cutUrl } from '../../helpers/cutUrl.helper';
import { LoadingScreen } from './LoadingScreen';
import unknownImg from '/public/img/unknown-pokemon.png';
// custom hooks
import useGetPokeData from '../../hooks/useGetPokeData';
import Image from 'next/image';
import Link from 'next/link';

const PokeCard = ({ pokeUrl }) => {
	pokeUrl = cutUrl(pokeUrl);

	const pokemonData = useGetPokeData(`/${pokeUrl}`);
	if (!pokemonData) {
		return <LoadingScreen />;
	}

	const { id, name, sprites, types, stats } = pokemonData;
	if (!sprites || !types || !stats) {
		return <LoadingScreen />;
	}
	const changeCurrentPokemon = () => {
		setCurrentPokeId(id);
		setCurrentPokeData(pokemonData);
	};
	return (
		<Link
			href={`/pokemon/${pokeUrl}`}
			onClick={() => {
				changeCurrentPokemon;
			}}
			className="flex flex-col justify-end group bg-card-bg1 rounded text-white overflow-hidden shadow-xl transition-all hover:shadow-3xl"
		>
			<div className="flex items-center justify-center bg-poke-dark1 overflow-hidden h-full min-h-[174px]">
				<Image
					className={`${
						sprites.front_default !== null ? '' : 'opacity-20'
					} w-full hover:scale-110 transition-all p-2 max-w-xs`}
					src={
						sprites.front_default !== null ? sprites.front_default : unknownImg
					}
					width="170"
					height="170"
					alt="Pokemon image"
					blurDataURL="URL"
					placeholder="blur"
				/>
			</div>

			<div className="p-4 flex gap-3 flex-col transition-all group-hover:bg-poke-gray1/5">
				<h2 className="card__tittle text-center">{name}</h2>
			</div>
		</Link>
	);
};

export default PokeCard;
