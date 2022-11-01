import { createContext, useContext, useEffect, useState } from 'react';
const CurrentPageContext = createContext({});
import { useRouter } from 'next/router';

const CurrentPageProvider = ({ children }) => {
	const [currentPageId, setCurrentPageId] = useState(0);
	const pageId = useRouter().query.id;

	// const pageIdentifier = useRouter().asPath.slice(0, 6);
	// const [currentSearch, setCurrentSearch] = useState('');

	useEffect(() => {
		setCurrentPageId(parseInt(pageId));
	}, [pageId]);

	return (
		<CurrentPageContext.Provider
			value={{
				currentPageId,
				setCurrentPageId,
				// currentSearch,
				// setCurrentSearch,
			}}
		>
			{children}
		</CurrentPageContext.Provider>
	);
};

export const useCurrentPageContext = () => useContext(CurrentPageContext);
export default CurrentPageProvider;
