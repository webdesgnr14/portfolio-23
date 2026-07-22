import * as React from 'react';

export const useIntersectionObserver = (targets, callback, options = {}) => {
	const [isIntersecting, setIsIntersecting] = React.useState(false);
	const callbackRef = React.useRef(callback);

	React.useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			setIsIntersecting(entries.some((entry) => entry.isIntersecting));

			entries.forEach((entry) => {
				callbackRef.current?.(entry);
			});
		}, options);
		const observedElements = new Set();

		const observeTargets = () => {
			const targetList = Array.isArray(targets) ? targets : [targets];

			targetList.forEach((target) => {
				const elements =
					typeof target === 'string'
						? document.querySelectorAll(target)
						: [target?.current || target];

				elements.forEach((element) => {
					if (element && !observedElements.has(element)) {
						observedElements.add(element);
						observer.observe(element);
					}
				});
			});
		};

		observeTargets();

		const mutationObserver = new MutationObserver(observeTargets);
		mutationObserver.observe(document.body, {
			childList: true,
			subtree: true,
		});

		return () => {
			mutationObserver.disconnect();
			observer.disconnect();
		};
	}, [targets, options.root, options.rootMargin, options.threshold]);

	return isIntersecting;
};
