export type HeroMobileAppData = {
	headline: string;
	subheadline: string;
	image: string;
	iosCTA: {
		text: string;
		href: string;
	};
	androidCTA: {
		text: string;
		href: string;
	};
};

export const heroMobileAppData: HeroMobileAppData = {
	headline: 'Track Your Bible Study Anywhere',
	subheadline:
		'Your personal Bible study companion in your pocket. Create and manage your Bible Study Plan.',
	image: '/images/page6.png',
	iosCTA: {
		text: 'Download on iOS',
		href: '#',
	},
	androidCTA: {
		text: 'Get it on Android',
		href: '#',
	},
};

