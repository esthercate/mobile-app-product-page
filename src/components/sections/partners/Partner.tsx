'use client';

import Container from '@/components/ui/Container';
import { partnersData } from './partners.data';

export function Partner() {
	return (
		<section className="py-16">
			<Container>
				<div className="flex flex-wrap items-center justify-center gap-x-28 gap-y-6">
					{partnersData.map((partner) => (
						<div
							key={partner.name}
							className="flex items-end justify-center gap-1"
						>
							<h3 className="text-primary">{partner.amount}</h3>
							<p className="text-sm">{partner.name}</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
