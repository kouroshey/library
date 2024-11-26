import localFont from 'next/font/local';

export const vazir = localFont({
	src: [
		{
			path: './vazirmatn-thin.woff2',
			weight: '100',
			style: 'normal',
		},
		{
			path: './vazirmatn-light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './vazirmatn-medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './vazirmatn-extra-bold.woff2',
			weight: '800',
			style: 'normal',
		},
	],
	variable: '--font-vazir',
	display: 'swap',
});
