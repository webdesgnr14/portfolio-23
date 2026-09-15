import * as React from 'react';
import gsap from 'gsap';
import useMousePosition from '../hooks/useMousePosition';
import { CursorContext } from '../context/CursorContextProvider';
import { isTouchDevice } from '../lib/helpers';

const cursorDefault = {
	width: 24,
	height: 24,
	backgroundColor: '#339989',
	border: 0,
	duration: 0.2,
	ease: 'power1.inOut',
};
const cursorHover = {
	width: 48,
	height: 48,
	backgroundColor: '#363946',
	border: '2px solid #fbfbfb',
	duration: 0.2,
	ease: 'power1.inOut',
};
const cursorAnimation = {
	width: 80,
	height: 80,
	backgroundColor: 'transparent',
	duration: 0.2,
	ease: 'power1.inOut',
};
const cursorText = {
	delay: 0.2,
	duration: 0.2,
	opacity: 1,
	ease: 'none',
};
const cursorTextNone = {
	duration: 0.2,
	opacity: 0,
	ease: 'none',
};
const cursorDown = {
	width: 20,
	height: 20,
	backgroundColor: '#708080',
	duration: 0.2,
	ease: 'power1.inOut',
};
const cursorHidden = { opacity: 0, duration: 0.2, ease: 'power1.inOut' };

export function Cursor() {
	const { clientX, clientY } = useMousePosition();
	const [cursor] = React.useContext(CursorContext);
	const cursorRef = React.useRef();
	const cursorTextRef = React.useRef();

	const handleHover = React.useCallback(() => {
		if (cursor.text) {
			gsap.to(cursorRef.current, cursorAnimation);
			gsap.to(cursorTextRef.current, cursorText);
		} else {
			gsap.to(cursorRef.current, cursorHover);
		}
	}, [cursor.text]);

	const handleOut = React.useCallback(() => {
		if (cursor.text !== '') {
			gsap.to(cursorTextRef.current, cursorTextNone);
		}

		gsap.to(cursorRef.current, cursorDefault);
	}, [cursor.text]);

	const animateMousePos = React.useCallback(() => {
		gsap.to(cursorRef.current, {
			x: clientX,
			y: clientY,
			opacity: 1,
			duration: 0.1,
			ease: 'power1.inOut',
		});
	}, [clientX, clientY]);

	React.useEffect(() => {
		const handleMouseEnter = () => {
			gsap.to(cursorRef.current, cursorDefault);
		};

		const handleMouseLeave = () => {
			gsap.to(cursorRef.current, cursorHidden);
		};

		const handleMouseDown = () => {
			if (cursor.active) return;
			gsap.to(cursorRef.current, cursorDown);
		};

		const handleMouseUp = () => {
			if (cursor.active) return;
			gsap.to(cursorRef.current, cursorDefault);
		};

		document.addEventListener('mouseenter', handleMouseEnter);
		document.addEventListener('mouseleave', handleMouseLeave);

		document.addEventListener('mousedown', handleMouseDown);
		document.addEventListener('mouseup', handleMouseUp);

		return () => {
			document.removeEventListener('mouseenter', handleMouseEnter);
			document.removeEventListener('mouseleave', handleMouseLeave);

			document.removeEventListener('mousedown', handleMouseDown);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [cursor.active]);

	React.useEffect(() => {
		if (cursor.active) {
			handleHover();
		} else {
			handleOut();
		}
	}, [cursor.active, handleHover, handleOut]);

	React.useEffect(() => {
		animateMousePos();
	}, [clientX, clientY, animateMousePos]);

	if (isTouchDevice) return null;

	return (
		<div className="cursor">
			<div className="cursor--icon" ref={cursorRef}>
				{cursor.text !== '' && (
					<span className="cursor--text" ref={cursorTextRef}>
						{cursor.text}
					</span>
				)}
			</div>
		</div>
	);
}
