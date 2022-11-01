import Image from 'next/image';
import { useRouter } from 'next/router';
import capitalizeCase from '../../helpers/Capitalize.helper';
import { LoadingScreen } from '../atoms/LoadingScreen';

export const PokemonProfile = ({ data }) => {
	const router = useRouter();
	if (!data) {
		return <LoadingScreen />;
	}
	const { name, types, sprites } = data;
	if (!name || !types || !sprites) {
		return <LoadingScreen />;
	}

	return (
		<div className="flex flex-col bg-poke-ligth1/5 h-fit rounded-md shadow-lg">
			<div className="pt-10 pb-5 px-8">
				<button
					// href="/page/1"
					type="button"
					onClick={() => router.back()}
					className=" absolute top-8 -left-1 group flex gap-2 items-center bg-poke-blue1 drop-shadow-lg py-1 px-3 rounded-md transition-all"
				>
					<span className="text-xs text-white/50 group-hover:text-white transition-all">
						Back
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-3 h-3 text-white/50 group-hover:text-white transition-all"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
						/>
					</svg>
				</button>
				<h1 className="text-2xl font-semibold mb-3">{capitalizeCase(name)}</h1>
				<ul className="flex gap-2">
					{types.map((typeObj) => (
						<li
							key={typeObj.type.url}
							className={`${
								typeObj.type.name && 'background-poke-type-' + typeObj.type.name
							} inline-block py-1 px-3 rounded-md`}
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
					sprites.front_default !== null
						? sprites.front_default
						: '/img/unknown-pokemon.png'
				}
				width="170"
				height="170"
				alt="Pokemon image"
			/>
		</div>
	);
};
