/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./build/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: '#1e3a8a',
				secondary: '#16a34a',

				textLight: '#ffffff',
				textDark: '#000000',
				white: '#ffffff',
				tahiti: {
					100: '#cffafe',
					200: '#a5f3fc',
					300: '#67e8f9',
					400: '#22d3ee',
					500: '#06b6d4',
					600: '#0891b2',
					700: '#0e7490',
					800: '#155e75',
					900: '#164e63',
				},
			},
		},
	},
	plugins: [],
};
