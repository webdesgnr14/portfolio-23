import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
	spinAnimation,
	spinReverseAnimation,
	useIsTablet,
} from '../lib/helpers';
import useAPI from '../hooks/useApi';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Logo from '../assets/icons/logo.svg?react';
import { Divide as Hamburger } from 'hamburger-react';
import { NavHashLink } from 'react-router-hash-link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { HoverElement } from './HoverElement';
import { LoadingContext } from '../context/LoadingContextProvider';
import { CursorContext } from '../context/CursorContextProvider';
import { HeroContext } from '../context/HeroContextProvider';
gsap.registerPlugin(ScrollTrigger);

const HOME_SECTIONS = ['#home', '#about-me', '#projects', '#contact'];
const NO_SECTIONS = [];
const SECTION_OBSERVER_OPTIONS = {
	rootMargin: '-25% 0px -65% 0px',
	threshold: 0,
};

const Branding = () => {
	return (
		<div className="header--branding">
			<div className="logo">
				<HoverElement
					href="/"
					onMouseEnter={(isHovering, logoRef) => {
						if (isHovering) {
							spinAnimation(logoRef);
						}
					}}
					onMouseLeave={(isHovering, logoRef) => {
						if (!isHovering) {
							spinReverseAnimation(logoRef);
						}
					}}
				>
					<Logo />
				</HoverElement>
			</div>
		</div>
	);
};

export const Header = () => {
	const { data: navData } = useAPI('primary-nav');
	const headerRef = React.useRef();
	const location = useLocation();
	const isHome = location.pathname === '/';
	const isVisible = !isHome;
	const [activeSection, setActiveSection] = React.useState('home');
	const [, setCursor] = React.useContext(CursorContext);
	const [, setLoading] = React.useContext(LoadingContext);
	const [heroLoaded] = React.useContext(HeroContext);
	const [isOpen, setIsOpen] = React.useState(false);
	const tablet = useIsTablet();

	const fadeInHeader = React.useCallback(() => {
		if (!headerRef.current) return;

		gsap.fromTo(
			headerRef.current,
			{
				transform: isHome ? 'translateY(100%)' : 'translateY(-100%)',
			},
			{
				opacity: 1,
				transform: 'translateY(0)',
				delay: 1,
				duration: 0.5,
				scrollTrigger: headerRef.current,
				ease: 'none',
			}
		);
	}, [isHome]);

	const handleSectionIntersection = React.useCallback((entry) => {
		if (entry.isIntersecting) {
			setActiveSection(entry.target.id);
		}
	}, []);

	useIntersectionObserver(
		isHome ? HOME_SECTIONS : NO_SECTIONS,
		handleSectionIntersection,
		SECTION_OBSERVER_OPTIONS
	);

	const handleScroll = React.useCallback(() => {
		if (!headerRef.current) return;

		const scrollTop = window.scrollY;
		const headerRect = headerRef.current.getBoundingClientRect();
		const headerBottom = headerRect.bottom;
		const windowHeight = window.innerHeight;
		const isSticky = isHome
			? scrollTop > 1 && headerBottom >= windowHeight
			: scrollTop > headerRect.height - 15;

		//Add Sticky Class
		if (isSticky) {
			headerRef.current.classList.add('sticky');
		} else {
			headerRef.current.classList.remove('sticky');
		}
	}, [isHome]);

	const toggleCursor = (isHovering) => {
		setCursor(() => {
			return {
				active: isHovering,
			};
		});
	};

	const loadingAnimation = () => {
		setLoading(() => {
			return { isLoading: true };
		});

		setTimeout(() => {
			setLoading(() => {
				return { isLoading: false };
			});
		}, 2600);
	};

	const handleMobileMenu = () => {
		if (tablet) {
			setIsOpen(false);
			toggleBodyClass(false);
		}
	};

	const toggleBodyClass = (toggled) => {
		if (toggled) {
			document.body.classList.add('mobile-menu-open');
		} else {
			document.body.classList.remove('mobile-menu-open');
		}
	};

	React.useLayoutEffect(() => {
		if (headerRef.current) {
			const height = headerRef.current.clientHeight;

			//Add --header-height css var
			document.documentElement.style.setProperty(
				'--header-height',
				height + 'px'
			);
		}
		// navData is listed so this retries once the header actually mounts
		// (it renders nothing until the primary-nav fetch resolves).
	}, [navData]);

	React.useLayoutEffect(() => {
		if (!isHome) {
			fadeInHeader();
		}
		// navData is listed so this retries once the header actually mounts
		// (it renders nothing until the primary-nav fetch resolves), since
		// isHome alone never changes again during a single page visit.
	}, [isHome, navData, fadeInHeader]);

	React.useLayoutEffect(() => {
		if (isHome && heroLoaded.isLoaded) {
			fadeInHeader();
		}
	}, [isHome, heroLoaded, fadeInHeader]);

	React.useEffect(() => {
		if (headerRef.current) {
			window.addEventListener('scroll', handleScroll);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll, isHome, navData, fadeInHeader]);

	if (!navData || location.pathname === '/404') return null;

	if (navData.length > 0) {
		return (
			<header className="header" ref={headerRef}>
				<div className="header--container">
					{isVisible && <Branding />}
					<div className="header--navigation">
						<nav className="navigation">
							<div className={'navigation--menu--toggle'}>
								<Hamburger
									toggled={isOpen}
									onToggle={(toggled) => {
										toggleBodyClass(toggled);
									}}
									toggle={setIsOpen}
									easing="ease-in"
									duration={0.8}
									size={24}
									label={'Toggle Menu'}
								/>
							</div>
							<ul className="navigation--menu">
								{navData.map((link) => {
									const sectionId = link.title
										.toLowerCase()
										.replace(/\s+/g, '-');
									let $match = isHome
										? activeSection === sectionId
										: location.pathname === link.url;

									if (link.url.includes('#')) {
										$match = isHome
											? activeSection === sectionId
											: location.pathname.includes('project') &&
												link.url.includes('project');

										return (
											<li
												key={link.ID}
												className={
													'navigation--menu-item' + ($match ? ' active' : '')
												}
											>
												<HoverElement
													as="div"
													onMouseEnter={(isHovering) =>
														toggleCursor(isHovering)
													}
													onMouseLeave={(isHovering) =>
														toggleCursor(isHovering)
													}
												>
													<NavHashLink
														to={link.url}
														smooth
														className={({ isActive }) =>
															isActive ? 'nav-link active' : 'nav-link'
														}
														onClick={() => {
															setActiveSection(sectionId);
															handleMobileMenu();
															loadingAnimation();
														}}
													>
														{link.title}
													</NavHashLink>
												</HoverElement>
											</li>
										);
									}

									return (
										<li
											key={link.ID}
											className={
												'navigation--menu-item' + ($match ? ' active' : '')
											}
										>
											<HoverElement
												as="div"
												onMouseEnter={(isHovering) => toggleCursor(isHovering)}
												onMouseLeave={(isHovering) => toggleCursor(isHovering)}
											>
												<NavLink to={link.url} reloadDocument>
													{link.title}
												</NavLink>
											</HoverElement>
										</li>
									);
								})}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}

	return null;
};
