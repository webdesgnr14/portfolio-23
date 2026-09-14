import * as React from 'react';
import { useHoverIntent } from 'react-use-hoverintent';
import { Link } from 'react-router-dom';
import cx from 'classnames';

export const HoverElement = ({
	children,
	as = 'a',
	href = null,
	target = null,
	rel = null,
	onMouseEnter,
	onMouseLeave,
	onClick = null,
	passedRef = null,
	reloadDocument = false,
	...rest
}) => {
	const [isHovering, intentRef, setIsHovering] = useHoverIntent();
	const Element = as;
	const hoverRef = passedRef || intentRef;
	// Prevent reverse tabnabbing on target="_blank" links.
	const resolvedRel = target === '_blank' ? rel || 'noopener noreferrer' : rel;
	// React Router's Link is for internal routes. href values often come
	// from editor-controlled CMS fields that may point off-site, so force
	// a real navigation for anything that looks external rather than
	// relying on every caller to remember target="_blank"/reloadDocument.
	const isExternal = typeof href === 'string' && /^([a-z]+:)?\/\//i.test(href);

	React.useEffect(() => {
		const node = hoverRef.current;
		if (node && onMouseEnter && onMouseLeave) {
			const handleEnter = () => setIsHovering(true);
			const handleLeave = () => setIsHovering(false);

			node.addEventListener('mouseenter', handleEnter);
			node.addEventListener('mouseleave', handleLeave);

			return () => {
				node.removeEventListener('mouseenter', handleEnter);
				node.removeEventListener('mouseleave', handleLeave);
			};
		}
		// onMouseEnter/onMouseLeave are intentionally excluded: most callers
		// pass unmemoized inline callbacks, so including them would re-attach
		// these listeners on every unrelated parent render.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hoverRef, setIsHovering]);

	React.useEffect(() => {
		const node = hoverRef.current;
		if (node && onMouseEnter && onMouseLeave) {
			if (isHovering) {
				onMouseEnter(isHovering, node);
			} else {
				onMouseLeave(isHovering, node);
			}

			return () => {
				if (isHovering) {
					onMouseEnter(false, node);
				} else {
					onMouseLeave(false, node);
				}
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hoverRef, isHovering]);

	if (Element === 'a') {
		return (
			<Link
				ref={hoverRef}
				className={cx('hover-element', rest.className ? rest.className : '')}
				to={href}
				target={target}
				rel={resolvedRel}
				reloadDocument={isExternal || reloadDocument}
				onClick={(e) => {
					if (onClick) {
						onClick(e);
					}
				}}
				{...rest}
			>
				{children}
			</Link>
		);
	}

	return (
		<Element
			ref={hoverRef}
			className={cx('hover-element', rest.className ? rest.className : '')}
			href={href}
			target={target}
			rel={resolvedRel}
			onClick={(e) => {
				if (onClick) {
					onClick(e);
				}
			}}
			{...rest}
		>
			{children}
		</Element>
	);
};
