import customPaginationRange from '../../helpers/paginationRange.helper';
import Link from 'next/link';
import { useCurrentPageContext } from '../../context/currentPage.context';

const Pagination = ({ indexTotal }) => {
	const { currentPageId } = useCurrentPageContext();

	const nPages = Math.ceil(indexTotal / 20);
	const indexFrom = currentPageId * 20;
	const indexTo = indexFrom - 19;
	const pageNumbers = customPaginationRange(nPages).map((item) =>
		item.toString()
	);

	return (
		<div className="flex justify-between px-4 py-3 sm:px-6">
			<ul className="flex flex-1 justify-between items-center">
				<li
					className={` ${
						currentPageId === 1 &&
						'!bg-gray-800 !border-gray-700 !hover:bg-gray-800'
					} h-fit relative flex items-center rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-poke-ligth1`}
				>
					<Link
						href={
							currentPageId !== 1 ? `/page/${currentPageId - 1}` : '/page/1'
						}
						className="h-full px-3 py-2 text-center outline-none focus:outline-none"
						// onClick={currentPageId === 1 ? null : prevPage}
					>
						Previous
					</Link>
				</li>
				<nav
					className=" flex flex-col items-center gap-4 -space-x-px rounded-md shadow-sm mx-auto "
					aria-label="Pagination"
				>
					<p className="text-sm text-poke-ligth1">
						Showing <span className="font-medium">{indexTo}</span> to {''}
						<span className="font-medium">{indexFrom}</span> from {''}
						<span className="font-medium">{indexTotal}</span> pokemons
					</p>
					<ul className="rounded border border-poke-ligth1 bg-white overflow-hidden w-fit">
						{pageNumbers.map((pgNumber, index) => {
							return (
								<li
									key={index}
									className={`${
										currentPageId == pgNumber && '!text-white !bg-poke-red1'
									} relative inline-flex items-center border border-poke-ligth1justify-center text-sm font-medium text-poke-blue1 hover:bg-poke-ligth1 focus:z-20`}
								>
									<Link
										href={pgNumber === '' ? `/page/1` : `/page/${pgNumber}`}
										className="h-full w-9 py-2 text-center"
									>
										{pgNumber === '' ? '...' : pgNumber}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
				<li
					className={` ${
						currentPageId === nPages &&
						'!bg-gray-800 !border-gray-700 !hover:bg-gray-800'
					} h-fit relative flex items-center rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-poke-ligth1`}
				>
					<Link
						href={
							currentPageId !== nPages
								? `/page/${currentPageId + 1}`
								: `/page/${nPages}`
						}
						className="h-full px-3 py-2 text-center outlin focus:outline-none"
					>
						Next
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
