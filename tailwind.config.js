/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1040px',
		},
		extend: {
			fontFamily: {
				Manrope: ['Manrope', 'sans-serif'],
			},
			colors: {
				'poke-red1': '#ef5350',
				'poke-blue1': '#127ded',
				'poke-gray1': '#ebf5f0',
				'poke-ligth1': '#e6e6e6',
				'poke-dark1': '#263238',
				'card-bg1': '#212e36',
				'card-bg2': '#283841',
				'card-color': '#7694a4',
				gallery: '#212e36',
				'type-normal': '#FFEDD5',
				'type-fighting': '#A79982',
				'type-flying': '#6EA3A8',
				'type-poison': '#9A5574',
				'type-ground': '#968F5E',
				'type-rock': '#905730',
				'type-bug': '#8C7898',
				'type-ghost': '#655C77',
				'type-steel': '#5E5E5E',
				'type-fire': '#E0544C',
				'type-water': '#4C7BE0',
				'type-grass': '#7CBF42',
				'type-electric': '#E3CA4E',
				'type-psychic': '#E34E7A',
				'type-ice': '#00BFD4',
				'type-dragon': '#ffE09324',
				'type-dark': '#4A0055',
				'type-fairy': '#D9128C',
				'type-unknown': '#5F5D5F',
				'type-shadow': '#6F2577',
			},
			boxShadow: {
				'3xl': '0 20px 32px -8px rgb(0 0 0 / 40%)',
			},
		},
	},
	plugins: [],
};
