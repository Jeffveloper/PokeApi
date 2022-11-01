const capitalizeCase = (word) => {
	let text = word
		.toLowerCase()
		.split(' ')
		.map((e) => e.charAt(0).toUpperCase() + e.substring(1))
		.join(' ');
	return text;
};
export default capitalizeCase;
