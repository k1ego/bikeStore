import React from 'react';

import { Callback } from '../components/Callback';
import { Catalog } from '../components/Catalog';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';

export const Home: React.FC = () => {
	return (
		<div>
			<Hero />

			<Callback />

			<Catalog />

			<Footer />
		</div>
	);
};
