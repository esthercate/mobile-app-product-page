'use client';

import NavLink from './NavLink';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Link from 'next/link';

type Props = {
	open: boolean;
	links: { label: string; href: string }[];
};

const MobileMenu = ({ open, links }: Props) => {
	if (!open) return null;

	return (
		<div className="md:hidden border-t border-border px-6 py-6 flex flex-col gap-4 bg-background">
			{links.map((link) => (
				<NavLink
					key={link.href}
					href={link.href}
				>
					{link.label}
				</NavLink>
			))}
			<Link
				href="#"
				className="w-full"
			>
				Download App
			</Link>

			<ThemeToggle />
		</div>
	);
};

export default MobileMenu;
