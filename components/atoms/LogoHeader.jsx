import React from 'react';
import Logo from '/public/img/siteLogo.png';
import Icon from '/public/img/siteIcon.png';
import Image from 'next/image';
import Link from 'next/link';

const LogoHeader = () => {
	return (
		<Link
			href="/page/1"
			className="relative w-fit hover:scale-105 transition-all"
		>
			<Image
				src={Logo}
				alt="Pokeapi Logo"
				width="104"
				height="42"
				className="drop-shadow-md"
			/>
			<Image
				src={Icon}
				alt="Pokeapi Icon"
				width="25"
				height="25"
				className="absolute left-full bottom-0 drop-shadow-md animate-bounce"
			/>
		</Link>
	);
};

export default LogoHeader;
