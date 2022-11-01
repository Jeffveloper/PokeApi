import Image from 'next/image';
import Link from 'next/link';

const LogoHeader = () => {
	return (
		<Link
			href="/page/1"
			className="relative w-fit hover:scale-105 transition-all"
		>
			<Image
				src="/img/siteLogo.png"
				alt="Pokeapi Logo"
				width="104"
				height="42"
				className="drop-shadow-md h-auto w-auto"
				priority={true}
			/>
			<Image
				src="/img/siteIcon.png"
				alt="Pokeapi Icon"
				width="25"
				height="25"
				className="absolute left-full bottom-0 drop-shadow-md animate-bounce"
			/>
		</Link>
	);
};

export default LogoHeader;
