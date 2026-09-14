import * as React from 'react';
import parse, { domToReact } from 'html-react-parser';
import { HoverElement } from './HoverElement';

const options = {
	replace(domNode) {
		if (domNode.type === 'tag' && domNode.name === 'a') {
			const { href, target, rel, class: className } = domNode.attribs;

			return (
				<HoverElement href={href} target={target} rel={rel} className={className}>
					{domToReact(domNode.children, options)}
				</HoverElement>
			);
		}
	},
};

// Renders an HTML string (e.g. from ACF/WP rich text) as real React
// elements instead of dangerouslySetInnerHTML, so <a> tags become actual
// HoverElement components - picking up hover-cursor behavior and the
// external-link safety handling HoverElement provides automatically.
export const RichText = React.forwardRef(
	({ as: Tag = 'div', html, ...rest }, ref) => {
		if (!html) return null;

		return (
			<Tag ref={ref} {...rest}>
				{parse(html, options)}
			</Tag>
		);
	}
);
RichText.displayName = 'RichText';
