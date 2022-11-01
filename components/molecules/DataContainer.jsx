export const DataContainer = ({ children, title }) => {
	return (
		<div className="border-2 border-white overflow-hidden rounded-md shadow-lg">
			<h2 className="text-poke-gray1 font-bold p-4 bg-poke-red1 border-b-2 border-white">
				{title}
			</h2>
			<div className="bg-white text-poke-dark1 px-2 py-4">{children}</div>
		</div>
	);
};
