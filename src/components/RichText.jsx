import * as React from 'react';
import parse, { domToReact } from 'html-react-parser';
import { CursorContext } from '../context/CursorContextProvider';
import { HoverElement } from './HoverElement';

// Builds html-react-parser options that replace <a> tags with HoverElement.
const buildOptions = (toggleCursor) => {
	const parserOptions = {
		replace(domNode) {
			if (domNode.type === 'tag' && domNode.name === 'a') {
				const { href, target, rel, class: className } = domNode.attribs;

				return (
					<HoverElement
						href={href}
						target={target}
						rel={rel}
						className={className}
						onMouseEnter={(isHovering) => toggleCursor(isHovering)}
						onMouseLeave={(isHovering) => toggleCursor(isHovering)}
					>
						{domToReact(domNode.children, parserOptions)}
					</HoverElement>
				);
			}
		},
	};

	return parserOptions;
};

// Parses an HTML string into React elements via html-react-parser.
export const RichText = React.forwardRef(
	({ as: Tag = 'div', html, ...rest }, ref) => {
		const [, setCursor] = React.useContext(CursorContext);

		const toggleCursor = React.useCallback(
			(isHovering) => {
				setCursor(() => {
					return {
						active: isHovering,
					};
				});
			},
			[setCursor]
		);

		const content = React.useMemo(
			() => (html ? parse(html, buildOptions(toggleCursor)) : null),
			[html, toggleCursor]
		);

		if (!html) return null;

		return (
			<Tag ref={ref} {...rest}>
				{content}
			</Tag>
		);
	}
);
RichText.displayName = 'RichText';
