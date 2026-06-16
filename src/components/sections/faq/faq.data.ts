export interface FAQItem {
	question: string;
	answer: string;
}

export const faqData: FAQItem[] = [
	{
		question: 'What is this app and who is it for?',
		answer:
			'This app is a Bible study tracker designed for anyone who wants to stay consistent in their Scripture reading. Whether you are just starting or aiming to complete the entire Bible, it helps you stay organized and focused.',
	},
	{
		question: 'How does the tracking work?',
		answer:
			'You can mark chapters as complete once you finish studying them. This helps you clearly see what you’ve covered and what still remains, so you don’t accidentally repeat or skip sections.',
	},
	{
		question: 'Can I track my progress through the whole Bible?',
		answer:
			'Yes, the app is perfect for full-Bible challenges. You can monitor your overall progress and stay motivated as you move closer to completing every book and chapter.',
	},
	{
		question: 'Will I lose my progress if I switch devices?',
		answer:
			'No, your progress is saved and synced depending on your setup, so you can continue your study seamlessly across devices.',
	},
	{
		question: 'Can I customize my study experience?',
		answer:
			'Yes, the app is designed to be flexible. You can track your reading at your own pace and focus on the books or chapters that matter most to you.',
	},
	{
		question: 'Is this app suitable for beginners?',
		answer:
			'Absolutely. The simple tracking system makes it easy for beginners to stay consistent, while still being useful for more experienced readers who want structured progress tracking.',
	},
];
