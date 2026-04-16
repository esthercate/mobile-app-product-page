import ThemeProviderWrapper from './ThemeProviderWrapper';
import type { Metadata } from 'next';
import { Nunito, Merriweather } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
	variable: '--font-nunito',
	subsets: ['latin'],
});

const merriweather = Merriweather({
	variable: '--font-merriweather',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Bible Study Companion',
	description:
		'Bible Study Companion is a platform for creating and managing your Bible study plan.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={`${nunito.variable} ${merriweather.variable} antialiased bg-background text-foreground`}
			>
				<ThemeProviderWrapper>{children}</ThemeProviderWrapper>
			</body>
		</html>
	);
}
