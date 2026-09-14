import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { HoverElement } from './HoverElement';
import { CursorContext } from '../context/CursorContextProvider';
import PrevIcon from '../assets/icons/prev.svg?react';
import NextIcon from '../assets/icons/next.svg?react';

export const Pagination = ({ data }) => {
	const [, setCursor] = React.useContext(CursorContext);
	const location = useLocation();

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

	if (!data) return null;

	const url = window.location.origin + location.pathname + location.search;

	const paginationData = data.reduce((acc) => {
		const pagination = {};

		if (!acc) {
			acc = data;
		}

		for (let i = 0; i < acc.length; i++) {
			const isCurrentPage = acc[i].button.url === url;

			if (isCurrentPage) {
				const nextPageIndex = i + 1;
				const prevPageIndex = i - 1;

				pagination['current'] = acc[i];
				pagination['prev'] = acc[prevPageIndex];
				pagination['next'] = acc[nextPageIndex];

				return pagination;
			}
		}
	}, data);

	if (paginationData?.next || paginationData?.prev) {
		return (
			<div className="pagination">
				<div className="container">
					{paginationData?.prev && (
						<HoverElement
							href={paginationData.prev.button.url}
							className="pagination--prev pagination--link"
							onMouseEnter={(isHovering) => toggleCursor(isHovering)}
							onMouseLeave={(isHovering) => toggleCursor(isHovering)}
							reloadDocument
						>
							<PrevIcon />
							<div className="pagination--content">
								<span className="label">{'Previous Project:'}</span>
								<span className="title">{paginationData.prev.title}</span>
							</div>
						</HoverElement>
					)}
					{paginationData?.next && (
						<HoverElement
							href={paginationData.next.button.url}
							className="pagination--next pagination--link"
							onMouseEnter={(isHovering) => toggleCursor(isHovering)}
							onMouseLeave={(isHovering) => toggleCursor(isHovering)}
							reloadDocument
						>
							<div className="pagination--content">
								<span className="label">{'Next Project:'}</span>
								<span className="title">{paginationData.next.title}</span>
							</div>
							<NextIcon />
						</HoverElement>
					)}
				</div>
			</div>
		);
	}

	return null;
};
