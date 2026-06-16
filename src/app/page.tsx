'use client';

import NavbarCTA from '@/components/layout/Navbar/NavbarCTA';
import Container from '@/components/ui/Container';
import HeroMobileApp from '@/components/sections/hero/HeroMobileApp';
import FeaturesSplit from '@/components/sections/features/FeaturesSplit';
import Pricing from '@/components/sections/pricing/Pricing';
import { TestimonialCarousel } from '@/components/sections/testimonials/TestimonialCarousel';
import { Faq } from '@/components/sections/faq/Faq';
import CTA from '@/components/ui/CTA';
import HowItWorks from '@/components/sections/how-it-works/HowItWorks';
import { Partner } from '@/components/sections/partners/Partner';
import FooterMinimal from '@/components/layout/Footer/FooterMinimal';

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			<NavbarCTA />
			<HeroMobileApp />
			<main className="flex-1 py-16 space-y-16">
				<Container>
					<Partner />
					<FeaturesSplit />
					<HowItWorks />
					<Pricing />
					<CTA />
					<TestimonialCarousel />
					<Faq />
					<CTA />
				</Container>
			</main>
			<FooterMinimal />
		</div>
	);
}
