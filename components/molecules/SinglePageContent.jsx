import Pagination from '../../components/atoms/Pagination';
import PokeCard from '../../components/molecules/PokeCard';
import { NotFound } from '../../components/atoms/NotFound';
import { LoadingScreen } from '../../components/atoms/LoadingScreen';

import { isArrayEmpty } from '../../helpers/isEmpty.helper';
import useGetPokeData from '../../hooks/useGetPokeData';
import { useRouter } from 'next/router';

const SinglePageContent = () => {
	const pageId = useRouter().query.id;
	const customUrl = `?offset=${(pageId - 1) * 20}&limit=20`;

	const pokeData = useGetPokeData(customUrl);

	if (pokeData === 'pageErr') {
		return <NotFound message="Maybe they hid in the bushes" />;
	}
	if (!pokeData || isArrayEmpty(pokeData)) {
		return <LoadingScreen />;
	}
	console.log(pageId);
	console.log(pokeData);
	return (
		<>
			<div className="px-3 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
				{pokeData?.results.map((poke) => (
					<PokeCard key={poke.name} pokeUrl={poke.url} />
				))}
			</div>
			<Pagination indexTotal={pokeData.count} />
		</>
	);
};

export default SinglePageContent;
