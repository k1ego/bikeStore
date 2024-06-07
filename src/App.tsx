import React, { Suspense } from 'react';
import './scss/App.scss';

import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn';


const NotFound = React.lazy(
	() => import('./pages/NotFound')
);

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route
					path='/SignIn'
					element={
						<Suspense fallback={<div>Идёт загрузка...</div>}>
							<SignIn />
						</Suspense>
					}
				/>
				<Route
					path='/SignUp'
					element={
						<Suspense fallback={<div>Идёт загрузка...</div>}>
							<SignUp />
						</Suspense>
					}
				/>
				<Route
					path='*'
					element={
						<Suspense fallback={<div>Идёт загрузка...</div>}>
							<NotFound />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
