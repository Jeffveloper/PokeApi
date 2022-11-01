import { useCurrentPageContext } from '../context/currentPage.context';

export const customPaginationRange = (lastPg) => {
	const { currentPageId } = useCurrentPageContext();

	if (currentPageId === 3) {
		let paginationRange = [
			1,
			2,
			currentPageId,
			currentPageId + 1,
			'',
			lastPg - 1,
			lastPg,
		];

		return paginationRange;
	}
	if (currentPageId > 3 && currentPageId < lastPg - 2) {
		let paginationRange = [
			1,
			'',
			currentPageId - 1,
			currentPageId,
			currentPageId + 1,
			'',
			lastPg,
		];

		return paginationRange;
	}
	if (currentPageId === lastPg - 2) {
		let paginationRange = [
			1,
			2,
			'',
			lastPg - 3,
			lastPg - 2,
			lastPg - 1,
			lastPg,
		];

		return paginationRange;
	}

	let paginationRange = [1, 2, 3, '', lastPg - 2, lastPg - 1, lastPg];

	return paginationRange;
};

export default customPaginationRange;
