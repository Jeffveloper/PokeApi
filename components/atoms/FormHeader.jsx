import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const FormHeader = () => {
	const [value, setValue] = useState('');
	// let navigateSearch = useNavigate();

	const handleOnChange = (e) => {
		setValue(e.target.value);
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		// navigateSearch('/pokemon/' + value);
	};

	return (
		<form
			className="bg-whiterounded-md overflow-hidden border-poke-dark1 border rounded-lg"
			onSubmit={handleOnSubmit}
		>
			<label className="">
				<input
					type="text"
					name="name"
					onChange={handleOnChange}
					className="px-2 py-1 border-poke-dark1 border-r outline-0"
				/>
			</label>
			<input
				type="submit"
				value="Search!"
				className="px-2 py-1 bg-poke-blue1 text-white hover:bg-poke-dark1 transition duration-300 ease-in-out"
			/>
		</form>
	);
};

export default FormHeader;
