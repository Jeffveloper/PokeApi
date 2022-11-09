import { useEffect, useState } from 'react';
import { useCurrentPageContext } from '../context/currentPage.context';
const baseUrl = process.env.NEXT_PUBLIC_POKEMON;

const useGetPokeData = (customUrl) => {
	const { currentPage } = useCurrentPageContext();
	const [pokeData, setPokeData] = useState([]);

	useEffect(() => {
		fetch(`${baseUrl}${customUrl}`)
			.then((res) => res.json())
			.then((data) => setPokeData(data))
			.catch((err) => setPokeData(err));

		if (customUrl === '?offset=NaN&limit=20') {
			setPokeData('pageErr');
		}
	}, [currentPage, customUrl]);
	return pokeData;
};
export default useGetPokeData;
