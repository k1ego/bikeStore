import './scss/App.scss';

import { Callback } from './components/Callback';
import { Catalog } from './components/Catalog';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

function App() {
	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			<main>
				<Hero />
				<Callback />
				<Catalog />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
