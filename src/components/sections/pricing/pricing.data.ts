// src/app/components/pricing/pricing.data.ts

export type PricingPlan = {
	title: string;
	price: string;
	description: string;
	features: string[];
	ctaText: string;
	ctaLink?: string;
};

export const pricingData: PricingPlan[] = [
	{
		title: 'Free',
		price: '$0',
		description:
			'Perfect for anyone starting their Bible reading journey and tracking daily progress.',
		features: [
			'Track Bible reading progress',
			'Mark books & chapters as completed',
			'Basic reading statistics',
			'Access all Bible books',
			'Simple and clean experience',
			'Ads supported',
		],
		ctaText: 'Download Now',
	},
	{
		title: 'Growth',
		price: '$3.99/mo',
		description:
			'Best for consistent readers who want deeper insights and a personalized experience.',
		features: [
			'Everything in Free',
			'Reading streak tracking',
			'Cloud sync across devices',
			'Advanced reading analytics',
			'Personalized reading plans',
			'Notes & highlights',
			'Ad-free experience',
		],
		ctaText: 'Download Now',
	},
	{
		title: 'Lifetime',
		price: '$12.99',
		description:
			'Unlock and access every premium feature forever with a one-time payment.',
		features: [
			'Everything in Growth',
			'Lifetime access',
			'Offline access',
			'Premium themes',
			'Exclusive future features',
			'Priority support',
			'Ad-free forever',
		],
		ctaText: 'Download Now',
	},
];
