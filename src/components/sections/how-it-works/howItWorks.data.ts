export type HowItWorksStep = {
	step: string;
	title: string;
	description: string;
};

export const steps: HowItWorksStep[] = [
	{
		step: '01',
		title: 'Choose your study plan',
		description:
			'Select a Bible reading plan or create your own based on your goals.',
	},
	{
		step: '02',
		title: 'Read and reflect',
		description:
			'Read your assigned chapter, take notes, and highlight key verses.',
	},
	{
		step: '03',
		title: 'Track your progress',
		description:
			'Mark chapters as complete, review your notes, and stay consistent daily.',
	},
];
