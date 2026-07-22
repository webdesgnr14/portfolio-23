import * as React from 'react';
import { useHoverIntent } from 'react-use-hoverintent';
import { Link } from 'react-router-dom';
import cx from 'classnames';

export const HoverElement = ({
	children,
	as = 'a',
	href = null,
	target = null,
	onMouseEnter,
	onMouseLeave,
	onClick = null,
	passedRef = null,
	...rest
}) => {
	const [isHovering, intentRef, setIsHovering] = useHoverIntent();
	const Element = as;
	const hoverRef = passedRef || intentRef;

	React.useEffect(() => {
		if (hoverRef) {
			console.log('hoverRef: ', hoverRef);
		}

		if (hoverRef.current && onMouseEnter && onMouseLeave) {
			hoverRef.current.addEventListener('mouseenter', (e) => {
				console.log('mouseenter event', e);
				setIsHovering(true);
			});
			hoverRef.current.addEventListener('mouseleave', (e) => {
				console.log('mouseleave event', e);
				setIsHovering(false);
			});

			return () => {
				hoverRef.current?.removeEventListener('mouseenter', setIsHovering);
				hoverRef.current?.removeEventListener('mouseleave', setIsHovering);
			};
		}
	}, [hoverRef]);

	React.useEffect(() => {
		if (hoverRef.current && onMouseEnter && onMouseLeave) {
			if (isHovering) {
				onMouseEnter(isHovering, hoverRef.current);
			} else {
				onMouseLeave(isHovering, hoverRef.current);
			}

			return () => {
				if (isHovering) {
					onMouseEnter(false, hoverRef.current);
				} else {
					onMouseLeave(false, hoverRef.current);
				}
			};
		}
	}, [hoverRef, isHovering]);

	if (Element === 'a') {
		return (
			<Link
				ref={hoverRef}
				className={cx('hover-element', rest.className ? rest.className : '')}
				to={href}
				target={target}
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
