import React from 'react';
import FormHeader from '../atoms/FormHeader';
import LogoHeader from '../atoms/LogoHeader';

const MainHeader = () => {
	return (
		<header className="bg-poke-red1 border-b-2 border-zinc-600">
			<div className="container mx-auto">
				<div className="px-3 py-5 flex flex-col justify-center items-center gap-8">
					<LogoHeader />
					<FormHeader />
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
