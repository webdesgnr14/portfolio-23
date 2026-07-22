import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import cx from 'classnames';
import { Cursor } from '../components/Cursor';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Home } from '../pages/Home';
import { AppTransition } from './AppTransition';
import LoadingContextProvider from '../context/LoadingContextProvider';
import CursorContextProvider from '../context/CursorContextProvider';
import MagicWordContextProvider from '../context/MagicWordContextProvider';
import MenuClickContextProvider from '../context/NavigationContextProvider';

const StaticBg = React.lazy(() =>
	import('../components/StaticBg').then((module) => ({
		default: module.StaticBg,
	}))
);
const Contact = React.lazy(() =>
	import('../pages/Contact').then((module) => ({
		default: module.Contact,
	}))
);
const Project = React.lazy(() =>
	import('../pages/Project').then((module) => ({
		default: module.Project,
	}))
);
const FourOhFour = React.lazy(() =>
	import('../pages/FourOhFour').then((module) => ({
		default: module.FourOhFour,
	}))
);

export const App = () => {
	const location = useLocation();
	const isHome = location.pathname === '/';

	return (
		<div
			className={cx('app-container', {
				'app-container--home': isHome,
			})}
		>
			<React.Suspense fallback={null}>
				<StaticBg />
			</React.Suspense>
			<LoadingContextProvider>
				<CursorContextProvider>
					<MenuClickContextProvider>
						<MagicWordContextProvider>
							<AppTransition />
							{!isHome && <Header />}
							<main className="main">
								<React.Suspense fallback={null}>
									<Routes location={location}>
										<Route path="/" element={<Home />} />
										<Route path="/contact/" element={<Contact />} />
										<Route path="/project/:slug/" element={<Project />} />
										<Route path="*" element={<FourOhFour />} />
									</Routes>
								</React.Suspense>
							</main>
							{isHome && <Header />}
							<Footer />
							<Cursor />
						</MagicWordContextProvider>
					</MenuClickContextProvider>
				</CursorContextProvider>
			</LoadingContextProvider>
		</div>
	);
};
