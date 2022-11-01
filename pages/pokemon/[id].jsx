import { useRouter } from 'next/router';
import { LoadingScreen } from '../../components/atoms/LoadingScreen';
import MetaTags from '../../components/atoms/Metatags';
import { NotFound } from '../../components/atoms/NotFound';

import { RadarPokemonStats } from '../../components/atoms/RadarPokemonStats';
import { DataContainer } from '../../components/molecules/DataContainer';
import { PokemonProfile } from '../../components/molecules/PokemonProfile';

import useGetPokeData from '../../hooks/useGetPokeData';

const SinglePokemon = () => {
	const pokemonId = useRouter().query.id;
	const pokemonData = useGetPokeData(`/${pokemonId}`);

	if (
		pokemonData ==
		`SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON`
	) {
		return (
			<>
				<MetaTags title="PokeApi - ???" />
				<NotFound message="I'm pretty sure that Pokemon doesn't exist" />;
			</>
		);
	}

	const { abilities, height, moves, weight, stats } = pokemonData;
	if (!pokemonData || !abilities || !height || !moves || !weight) {
		return (
			<>
				<MetaTags title="PokeApi - ???" />
				<LoadingScreen />;
			</>
		);
	}
	return (
		<>
			<MetaTags title={`PokeApi - ${pokemonData.name}`} />
			<main className="bg-gallery">
				<div className="container mx-auto">
					<div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-[auto_auto_auto] px-3 py-5 relative text-white gap-5">
						<PokemonProfile data={pokemonData} />
						<div className="flex col-span-2 row-span-4 md:sticky h-max md:top-[10px] flex-col gap-5">
							<DataContainer title="Stats 📊">
								<RadarPokemonStats stats={stats} />
							</DataContainer>
						</div>
						<DataContainer title="Info 🔎">
							<p className="flex">
								<span className="mr-4">Heigth: {height}m</span>
								<span className="mr-4">/</span>
								<span>Width: {weight}kg</span>
							</p>
						</DataContainer>
						<DataContainer title="Attacks ⚔️">
							<ul className="flex flex-wrap gap-5">
								{moves.length === 0 ? (
									<p>no attacks registered</p>
								) : (
									moves.map(
										(movement, limit) =>
											limit < 10 && (
												<li
													className="rounded p-1 bg-poke-ligth1"
													key={movement.move.url}
												>
													<p>{movement.move.name}</p>
												</li>
											)
									)
								)}
							</ul>
						</DataContainer>
						<DataContainer title="Abilities 💪">
							<ul className="flex flex-wrap gap-5">
								{abilities.length === 0 ? (
									<p>no abilities registered</p>
								) : (
									abilities.map((abilitieObj) => (
										<li
											className="rounded p-1 bg-poke-ligth1"
											key={abilitieObj.ability.url}
										>
											<p>{abilitieObj.ability.name}</p>
										</li>
									))
								)}
							</ul>
						</DataContainer>
					</div>
				</div>
			</main>
		</>
	);
};

export default SinglePokemon;
