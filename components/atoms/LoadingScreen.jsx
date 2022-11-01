import Image from 'next/image';
import image from '/public/img/siteIcon.png';

export const LoadingScreen = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-5 bg-poke-dark1 w-full h-screen">
			<Image
				src={image}
				alt="Pokeball rotating"
				width="50"
				height="50"
				className="drop-shadow-md animate-spin"
			/>
			<p className="text-poke-gray1">Cargando ...</p>
		</div>
	);
};
