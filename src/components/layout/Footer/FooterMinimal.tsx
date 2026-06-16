'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const footerLinks = [
	{ label: 'Features', href: '#features' },
	{ label: 'How It Works', href: '#how-it-works' },
	{ label: 'Pricing', href: '#pricing' },
];

const FooterMinimal = () => {
	return (
		<footer className="border-t border-border bg-background py-8">
			<Container className="flex flex-col gap-4">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					{/* Logo */}
					<div className="text-lg font-bold">BibleFlow</div>

					{/* Links */}
					<div className="flex gap-6">
						{footerLinks.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="text-sm text-muted-foreground hover:text-foreground transition"
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Social Icons */}
					<div className="flex gap-4 text-muted-foreground">
						<Link
							href="#"
							className="hover:text-foreground transition"
						>
							<FaTwitter size={18} />
						</Link>
						<Link
							href="#"
							className="hover:text-foreground transition"
						>
							<FaGithub size={18} />
						</Link>
						<Link
							href="#"
							className="hover:text-foreground transition"
						>
							<FaLinkedin size={18} />
						</Link>
					</div>
				</div>
				{/* Copyright */}
				<div className="py-3 text-center">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} BibleFlow. All rights reserved.
					</p>
				</div>
			</Container>
		</footer>
	);
};

export default FooterMinimal;
