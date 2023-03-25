import { josefinSans } from '../fonts';

import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Creations from '@/components/Creations';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<main className={josefinSans.className}>
			<Hero />
			<Features />
			<Creations />
			<Footer />
		</main>
	);
}
