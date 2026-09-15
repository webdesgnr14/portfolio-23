import * as React from 'react';
import gsap from 'gsap';
import cx from 'classnames';
import useEmblaCarousel from 'embla-carousel-react';
import AutoHeight from 'embla-carousel-auto-height';
import Fade from 'embla-carousel-fade';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CursorContext } from '../context/CursorContextProvider';
import { Image } from '../components/Image';
import { HoverElement } from './HoverElement';
gsap.registerPlugin(ScrollTrigger);

const BREAKPOINT = 768;
const PLUGIN_OPTIONS = {
	active: true,
	breakpoint: BREAKPOINT,
};
const OPTIONS = {
	containScroll: false,
	align: 'start',
	skipSnaps: false,
	loop: false,
	slidesToScroll: 1,
};
const PLUGINS = [AutoHeight(PLUGIN_OPTIONS), Fade(PLUGIN_OPTIONS)];

export const Slider = ({ design_samples }) => {
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [, setCursor] = React.useContext(CursorContext);
	const btnRef = React.useRef();
	const containerRef = React.useRef();

	const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, PLUGINS);
	const [scrollSnaps, setScrollSnaps] = React.useState([]);
	const [selectedSnap, setSelectedSnap] = React.useState(0);
	const scrollTo = (index) => emblaApi?.scrollTo(index);
	const snaps = emblaApi?.scrollSnapList();
	const setupSnaps = React.useCallback(
		() => setScrollSnaps(snaps),
		[snaps]
	);
	const setActiveSnap = React.useCallback(
		() => setSelectedSnap(emblaApi?.selectedScrollSnap()),
		[emblaApi]
	);

	const handleScroll = (e, id) => {
		e.preventDefault();
		const element = document.getElementById(id);

		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	const toggleCursor = (isHovering) => {
		setCursor(() => {
			return {
				active: isHovering,
			};
		});
	};

	// Function to re-initialize Embla when the slide changes
	const reInitHeight = React.useCallback(() => {
		if (emblaApi) {
			emblaApi.reInit(OPTIONS, PLUGINS);
		}
	}, [emblaApi]);

	React.useEffect(() => {
		if (isLoaded && emblaApi) {
			// scrollSnaps/selectedSnap only exist once the Embla instance is
			// ready, so they can't be computed during render.
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setupSnaps();
			setActiveSnap();
			reInitHeight();

			emblaApi.on('reinit', setupSnaps);
			emblaApi.on('reinit', setActiveSnap);
			emblaApi.on('select', setActiveSnap);
			emblaApi.on('select', reInitHeight);

			// Unsubscribe from the event on component unmount
			return () => {
				emblaApi.off('select', reInitHeight);
			};
		}
	}, [emblaApi, isLoaded, reInitHeight, setupSnaps, setActiveSnap]);

	React.useLayoutEffect(() => {
		gsap.to(btnRef.current, {
			opacity: 1,
			delay: 0.2,
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top top',
				end: 'center center',
				scrub: 0.5,
			},
		});
	}, [btnRef]);

	return (
		<div className="project--slider" ref={containerRef}>
			<HoverElement
				href="#"
				className="back-to-controls"
				passedRef={btnRef}
				onMouseEnter={(isHovering) => toggleCursor(isHovering)}
				onMouseLeave={(isHovering) => toggleCursor(isHovering)}
				onClick={(e) => handleScroll(e, 'project--samples')}
				aria-label="Back to slider controls"
			>
				<span className="back-to-controls--text">Back to Controls</span>
			</HoverElement>
			<div className="project--samples embla" id="project--samples">
				<div className="project--section--inner">
					<div
						id="project--samples--slider--nav"
						className="project--samples--nav embla__dots"
					>
						{scrollSnaps.map((_, index) => (
							<button
								className={cx('embla__dot', {
									active: index === selectedSnap,
								})}
								key={index}
								onClick={() => scrollTo(index)}
							>
								{index === 0 ? 'First' : `Go to slide ${index + 1}`}
							</button>
						))}
					</div>
				</div>
				<div
					className="project--samples--slider embla__viewport"
					ref={emblaRef}
				>
					<div className="project--samples--slider--inner embla__container">
						{design_samples.map((image, i) => {
							return (
								<div key={i} className="project--samples--img embla__slide">
									<Image id={image.image} onLoad={() => setIsLoaded(true)} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
