import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			transform: {
				'scale-x-neg': 'scaleX(-1)',
			},
			colors: {
				'beige-100': '#F8F4F0',
				'beige-500': '#98908B',
				'grey-900': '#201F24',
				'grey-500': '#696868',
				'grey-300': '#B3B3B3',
				'grey-100': '#F2F2F2',
				cyan: '#82C9D7',
				green: '#277C78',
				navy: '#626070',
				yellow: '#F2CDAC',
			},
		},
	},
	plugins: [
		({ addUtilities }: { addUtilities: any }) => {
			addUtilities(
				{
					'.scale-x-neg': {
						transform: 'scaleX(-1)',
					},
				},
				['responsive', 'hover']
			);
		},
	],
} satisfies Config;

export default config;
