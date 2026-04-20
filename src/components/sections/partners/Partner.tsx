'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import { logos } from './partners.data';

export function Partner() {
	return (
		<section className="py-16">
			<Container>
				<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
					{logos.map((logo) => (
						<div
							key={logo.name}
							className="flex items-center justify-center"
						>
							<Image
								src={logo.src}
								alt={logo.name}
								width={250}
								height={60}
								className="object-contain rounded-lg"
							/>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
