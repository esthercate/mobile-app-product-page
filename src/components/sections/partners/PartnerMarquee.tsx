'use client';

import Container from '@/components/ui/Container';
import { partnersData } from './partners.data';
import SectionHeader from '@/components/ui/SectionHeader';

export function PartnerMarquee() {
	return (
		<section className="py-16 overflow-hidden">
			<Container>
				<SectionHeader subheading="Loved by the best companies in the world." />

				<div className="relative overflow-hidden">
					<div className="flex w-max gap-12 animate-marquee">
						{[...partnersData, ...partnersData].map((partner, index) => (
							<div
								key={index}
								className="flex items-center justify-center shrink-0"
							>
								<div className="flex flex-col items-center justify-center">
									<p className="text-sm font-medium">{partner.name}</p>
									<p className="text-sm text-muted-foreground">
										{partner.amount}
									</p>
								</div>
							</div>
						))}
					</div>

					<div
						aria-hidden
						className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background via-background/40 to-transparent backdrop-blur-sm sm:w-2"
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background via-background/40 to-transparent backdrop-blur-sm sm:w-2"
					/>
				</div>
			</Container>
		</section>
	);
}
