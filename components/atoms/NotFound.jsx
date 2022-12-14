import Image from 'next/image';

export const NotFound = ({
	message = 'oops!, parece que no se encontro lo que buscabas',
}) => {
	return (
		<div className="flex flex-col items-center justify-center gap-5 w-full h-screen">
			<Image
				src="/img/NotFound.png"
				alt="Pokeapi Icon"
				width="259"
				height="215"
				className="drop-shadow-xl "
			/>
			<p className="text-poke-gray1">{message}</p>
		</div>
	);
};
