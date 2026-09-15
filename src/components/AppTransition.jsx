import * as React from 'react';
import cx from 'classnames';
import gsap from 'gsap';
import Logo from '../assets/icons/logo.svg?react';
import { LoadingContext } from '../context/LoadingContextProvider';

const Gate = ({ action, numOfSections = 2 }) => {
	const sectionRefs = React.useRef([]);
	const sections = [];

	for (let i = 0; i < numOfSections; i++) {
		const section = (
			<div
				className={`gate-part gate-part--${i + 1}`}
				key={i}
				ref={(el) => (sectionRefs.current[i] = el)}
			></div>
		);

		sections.push(section);
	}

	React.useLayoutEffect(() => {
		if (action && sectionRefs.current.length === numOfSections) {
			const ctx = gsap.context(() => {
				gsap.utils.toArray(sectionRefs.current).forEach(function (e, i) {
					gsap.fromTo(
						e,
						{ opacity: 0, y: i % 2 !== 0 ? '-100%' : '100%' },
						{
							opacity: 1,
							y: 0,
							ease: 'power1.inOut',
							duration: 0.5,
						}
					);
				});
			}, sectionRefs.current);

			return () => ctx.revert();
		}
	}, [action, numOfSections]);

	return <div className="gate">{sections}</div>;
};

const LogoAnimation = ({ action }) => {
	const logoRef = React.useRef();

	React.useLayoutEffect(() => {
		if (action && logoRef.current) {
			const tl = gsap.timeline({
				repeat: -1,
				delay: 0.6,
				repeatDelay: 0.5,
				yoyo: true,
				ease: 'elastic',
			});
			tl.to(logoRef.current, {
				opacity: 1,
				duration: 0.5,
			});
			tl.to(logoRef.current, {
				rotateY: -360,
				duration: 0.5,
			});
			tl.to(logoRef.current, {
				rotateY: 0,
				duration: 0.5,
			});
		}
	}, [action]);

	return (
		<div className={'app-transition--icon'} ref={logoRef}>
			<Logo />
		</div>
	);
};

export function AppTransition() {
	const [loading] = React.useContext(LoadingContext);
	const action = loading.isLoading;

	return (
		<div
			className={cx('app-transition', { 'app-transition--complete': !action })}
		>
			<Gate action={action} />
			<LogoAnimation action={action} />
		</div>
	);
}
