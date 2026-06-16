'use client';

type Props = {
	heading?: string;
	subheading?: string;
};

const SectionHeader = ({ heading, subheading }: Props) => {
	return (
		<div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
			<h1>{heading}</h1>
			{subheading && <p>{subheading}</p>}
		</div>
	);
};

export default SectionHeader;
