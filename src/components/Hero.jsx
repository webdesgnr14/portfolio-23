import * as React from 'react';
import gsap from 'gsap';
import useAPI from '../hooks/useApi';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CursorContext } from '../context/CursorContextProvider';
import { HeroContext } from '../context/HeroContextProvider';
import {
	spinAnimation,
	spinReverseAnimation,
	getImageIDs,
} from '../lib/helpers';
import Logo from '../assets/icons/logo.svg?react';
import Arrow from '../assets/icons/arrow.svg?react';
import { ImageGrid } from './GridImages';
import { HoverElement } from './HoverElement';
gsap.registerPlugin(ScrollTrigger);

export function Hero({ data }) {
	const imageIDs = getImageIDs(data?.images);
	const { data: imagesData } = useAPI('media?include=' + imageIDs);
	const heroRef = React.useRef();
	const headingRef = React.useRef();
	const fadeInLogoRef = React.useRef();
	const arrowRef = React.useRef();
	const [, setCursor] = React.useContext(CursorContext);
	const [, setHeroLoaded] = React.useContext(HeroContext);

	const toggleCursor = (isHovering) => {
		setCursor(() => {
			return {
				active: isHovering,
			};
		});
	};

	const toggleHeroLoaded = React.useCallback(() => {
		setHeroLoaded(() => {
			return { isLoaded: true };
		});
	}, [setHeroLoaded]);

	React.useLayoutEffect(() => {
		if (fadeInLogoRef.current && heroRef.current) {
			gsap.fromTo(
				fadeInLogoRef.current,
				{
					opacity: 0,
				},
				{
					scrollTrigger: {
						trigger: heroRef.current,
					},
					opacity: 1,
					delay: 0.2,
					duration: 0.5,
					ease: 'easeIn',
				}
			);
		}
	}, []);

	React.useLayoutEffect(() => {
		if (headingRef.current && heroRef.current) {
			gsap.fromTo(
				headingRef.current,
				{
					opacity: 0,
					transform: 'translateY(180px)',
				},
				{
					opacity: 1,
					transform: 'translateY(0)',
					delay: 0.4,
					duration: 0.5,
					scrollTrigger: {
						trigger: heroRef.current,
					},
					ease: 'easeIn',
				}
			);
		}
	}, []);

	React.useLayoutEffect(() => {
		if (arrowRef.current && heroRef.current) {
			gsap.fromTo(
				arrowRef.current,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					delay: 1,
					duration: 0.5,
					scrollTrigger: {
						trigger: heroRef.current,
					},
					ease: 'easeIn',
				}
			);
		}
	}, []);

	React.useEffect(() => {
		if (heroRef.current) {
			toggleHeroLoaded();
		}
	}, [toggleHeroLoaded]);

	if (Object.keys(data).length > 0) {
		return (
			<div id="home" ref={heroRef} className="hero section">
				<div className="hero--container">
					{data?.heading && (
						<div className="hero--content">
							<HoverElement
								className="hero--logo"
								href="/"
								id="hero-logo"
								onMouseEnter={(isHovering, logoRef) => {
									toggleCursor(isHovering);

									if (isHovering) {
										spinAnimation(logoRef);
									}
								}}
								onMouseLeave={(isHovering, logoRef) => {
									if (!isHovering) {
										spinReverseAnimation(logoRef);
									}

									toggleCursor(isHovering);
								}}
								aria-label="Navigate Home"
								reloadDocument
							>
								<Logo />
							</HoverElement>
							<h1 ref={headingRef}>{data.heading}</h1>
						</div>
					)}
					{imagesData?.length > 0 && <ImageGrid data={imagesData} />}
					<div className="arrow-svg" ref={arrowRef}>
						<Arrow />
					</div>
				</div>
			</div>
		);
	}

	return null;
}
