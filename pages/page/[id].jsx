import { isArrayEmpty } from '../../helpers/isEmpty.helper';
import Pagination from '../../components/atoms/Pagination';
import PokeCard from '../../components/atoms/PokeCard';
import { LoadingScreen } from '../../components/atoms/LoadingScreen';

import useGetPokeData from '../../hooks/useGetPokeData';
import { useCurrentPageContext } from '../../context/currentPage.context';
import { useRouter } from 'next/router';

const SinglePageList = () => {
	const pageId = useRouter().query.id;
	// const { currentPageId } = useCurrentPageContext();
	console.log(pageId);

	const customUrl = `?offset=${(pageId - 1) * 20}&limit=20`;
	const pokeData = useGetPokeData(customUrl);

	if (!pokeData) {
		return <LoadingScreen />;
	}

	return (
		<main className="bg-gallery">
			<div className="container mx-auto">
				<div className="px-3 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
					{isArrayEmpty(pokeData) ? (
						<LoadingScreen />
					) : (
						pokeData.results.map((poke) => (
							<PokeCard key={poke.name} pokeUrl={poke.url} />
						))
					)}
				</div>
				<Pagination indexTotal={pokeData.count} />
			</div>
		</main>
	);
};

export default SinglePageList;
