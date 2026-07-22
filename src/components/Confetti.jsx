import * as React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import confetti from 'canvas-confetti';

export function Confetti({ action = false, height }) {
	const canvasStyles = {
		position: 'fixed',
		pointerEvents: 'none',
		width: '100%',
		height: height || '100%',
		top: 0,
		left: 0,
		zIndex: 5,
	};

	const refAnimationInstance = React.useRef(null);

	const getInstance = React.useCallback((instance) => {
		refAnimationInstance.current = instance;
	}, []);

	// Fire the confetti with custom options
	const fire = React.useCallback(() => {
		if (refAnimationInstance.current) {
			var duration = 3 * 1000;
			var end = Date.now() + duration;

			(function frame() {
				// launch a few confetti from the left edge
				confetti({
					particleCount: 7,
					angle: 60,
					spread: 55,
					origin: { x: 0 },
					colors: [
						'#339989',
						'#e4f1fe',
						'#708080',
						'#cce7e8',
						'#99b3b3',
						'#66a3a3',
					],
				});
				// and launch a few from the right edge
				confetti({
					particleCount: 7,
					angle: 120,
					spread: 55,
					origin: { x: 1 },
					colors: [
						'#339989',
						'#e4f1fe',
						'#708080',
						'#cce7e8',
						'#99b3b3',
						'#66a3a3',
					],
				});

				// keep going until we are out of time
				if (Date.now() < end) {
					requestAnimationFrame(frame);
				}
			})();
		}
	}, []);

	React.useEffect(() => {
		if (action) {
			fire();
		}
	}, [action]);

	return <ReactCanvasConfetti onInit={getInstance} style={canvasStyles} />;
}
