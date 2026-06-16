export interface TestimonialCarousel {
	quote: string;
	name: string;
	role: string;
	avatar: string;
	company?: string;
	rating?: number;
}

export const testimonialsCarousel: TestimonialCarousel[] = [
	{
		quote:
			'This app helped me stay consistent with my Bible reading for the first time. Tracking completed chapters keeps me motivated every day.',
		name: 'Sarah Johnson',
		role: 'Daily Bible Reader',
		company: 'TechFlow',
		avatar: '/images/user.png',
		rating: 5,
	},
	{
		quote:
			'I love being able to mark books and chapters as completed. It makes my reading journey feel organized and achievable.',
		name: 'Michael Chen',
		role: 'Church Volunteer',
		company: 'Startly',
		avatar: '/images/user.png',
		rating: 5,
	},
	{
		quote:
			'The clean design and progress tracking make it so easy to keep up with my Bible study routine.',
		name: 'Emily Davis',
		role: 'Bible Study Leader',
		company: 'PixelWorks',
		avatar: '/images/user.png',
		rating: 4,
	},
	{
		quote:
			'Being able to see which chapters I have already read has made my scripture study much more consistent.',
		name: 'David Kim',
		role: 'Youth Mentor',
		company: 'DevCore',
		avatar: '/images/user.png',
		rating: 5,
	},
	{
		quote:
			'Simple, encouraging, and easy to use. I finally completed reading an entire book of the Bible without losing track.',
		name: 'Sophia Martinez',
		role: 'Community Coordinator',
		company: 'ScaleOps',
		avatar: '/images/user.png',
		rating: 5,
	},
	{
		quote:
			'This is one of the best Bible tracking apps I have used. The experience feels smooth and distraction-free.',
		name: 'James Wilson',
		role: 'Scripture Enthusiast',
		company: 'UIWorks',
		avatar: '/images/user.png',
		rating: 4,
	},
];
