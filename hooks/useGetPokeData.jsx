import { useEffect, useState } from 'react';
import { useCurrentPageContext } from '../context/currentPage.context';
const baseUrl = process.env.NEXT_PUBLIC_POKEMON;

const useGetPokeData = (customUrl) => {
	const { currentPage } = useCurrentPageContext();
	const [pokeData, setPokeData] = useState([]);

	if (customUrl === '?offset=NaN&limit=20') {
		useEffect(() => {
			setPokeData('pageErr');
		}, [customUrl]);
		return pokeData;
	}

	useEffect(() => {
		fetch(`${baseUrl}${customUrl}`)
			.then((res) => res.json())
			.then((data) => setPokeData(data))
			.catch((err) => setPokeData(err));
	}, [currentPage, customUrl]);
	return pokeData;
};
export default useGetPokeData;
