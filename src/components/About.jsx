import * as React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Tabs } from './Tabs';
import { RichText } from './RichText';
import { useLocation } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

export function About({ data }) {
	const containerRef = React.useRef();
	const headingRef = React.useRef();
	const contentRef = React.useRef();
	const location = useLocation();

	React.useLayoutEffect(() => {
		if (!data) return;
		if (location.hash && containerRef.current) {
			const id = location.hash.replace('#', '');

			if (id === 'about') {
				containerRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'nearest',
					inline: 'start',
				});
			}
		}
	}, [location, data]);

	React.useLayoutEffect(() => {
		if (!data || !headingRef.current || !contentRef.current) return;
		gsap.fromTo(
			headingRef.current,
			{ opacity: 0, y: -40 },
			{
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top center',
					end: 'center center',
					scrub: 0.5,
				},
				ease: 'power1.inOut',
			}
		);
		gsap.fromTo(
			contentRef.current,
			{ opacity: 0, y: -40 },
			{
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top center',
					end: 'center center',
					scrub: 0.5,
				},
				delay: 0.1,
				ease: 'power1.inOut',
			}
		);
	}, [data]);

	if (!data) return null;

	return (
		<div id="about-me" className="about section" ref={containerRef}>
			<div className="about--container">
				<div className="about--left">
					{(data.heading || data.body) && (
						<div className="about--content">
							{data?.heading && (
								<h2 className="about--heading heading" ref={headingRef}>
									{data.heading}
								</h2>
							)}
							{data?.body && (
								<RichText
									className="about--body"
									ref={contentRef}
									html={data.body}
								/>
							)}
						</div>
					)}
				</div>
				{data?.tabs?.length > 0 && <Tabs data={data.tabs} />}
			</div>
		</div>
	);
}
