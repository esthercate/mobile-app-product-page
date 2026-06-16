'use client';

import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Button from './Button';

const CTA = () => {
	return (
		<section
			className="py-16"
			id="download"
		>
			<div className="flex flex-col justify-center items-center bg-primary/40 rounded-2xl p-16 text-center space-y-6">
				<h2>Start your Bible study journey today</h2>
				<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
					<Button
						size="lg"
						icon={<FaApple />}
						onClick={() =>
							(window.location.href = 'https://apps.apple.com/us/iphone/apps')
						}
					>
						Download on iOS
					</Button>
					<Button
						size="lg"
						icon={<FaGooglePlay />}
						onClick={() =>
							(window.location.href = 'https://play.google.com/store/apps/')
						}
					>
						Get it on Android
					</Button>
				</div>
			</div>
		</section>
	);
};

export default CTA;
