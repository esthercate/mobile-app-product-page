'use client';

import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { pricingData } from './pricing.data';
import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';

const PricingSection = () => {
	return (
		<section
			id="pricing"
			className="py-20 bg-background text-foreground"
		>
			<Container>
				<SectionHeader
					heading="Simple, Transparent Pricing"
					subheading="Choose the plan that fits your needs."
				/>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
					{pricingData.map((plan, index) => (
						<Card
							key={index}
							className="flex flex-col text-center h-full"
						>
							<div className="flex-1">
								<div className="flex flex-col gap-2">
									<h3>{plan.title}</h3>
									<span className="text-2xl font-bold text-primary">
										{plan.price}
										<span className="text-xs text-muted-foreground">
											/Month
										</span>
									</span>
									<p>{plan.description}</p>
								</div>
								<hr className="my-4" />
								<ul className="mt-4 flex flex-col gap-3 text-left">
									{plan.features.map((feature, idx) => (
										<li
											key={idx}
											className="flex items-center gap-3 text-left"
										>
											<FiCheck className="text-primary" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
							<Link
								href="#download"
								className="mt-6 px-6 py-2 font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
							>
								{plan.ctaText}
							</Link>
						</Card>
					))}
				</div>
			</Container>
		</section>
	);
};

export default PricingSection;
