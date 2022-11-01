import { useEffect, useState } from 'react';
import { useCurrentPageContext } from '../context/currentPage.context';
const baseUrl = process.env.NEXT_PUBLIC_POKEMON;

const useGetPokeData = (customUrl) => {
	// const { currentPage } = useCurrentPageContext();
	const [pokeData, setPokeData] = useState([]);

	useEffect(() => {
		fetch(`${baseUrl}${customUrl}`)
			.then((res) => res.json())
			.then((data) => setPokeData(data));
	}, [customUrl]);
	// }, [currentPage, customUrl]);
	return pokeData;
};
export default useGetPokeData;
