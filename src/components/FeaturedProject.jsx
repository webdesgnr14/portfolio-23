import * as React from 'react';
import { HoverElement } from './HoverElement';
import { getImageIDs } from '../lib/helpers';
import wp_api from '../hooks/useApi';

export const FeaturedProject = ({ data }) => {
	if (!data.title || !data.images || !data.button) return null;

	const imageIDs = getImageIDs(data?.images);
	const {
		data: imagesData,
		apiLoading,
		apiError,
	} = wp_api('media?include=' + imageIDs);

	let imageData;

	if (imagesData.length > 0) {
		imageData = data?.images.map((image) => {
			const mediaData = imagesData.find((media) => media.id === image.id);
			return {
				url: mediaData?.source_url || image.url,
				alt: mediaData?.alt_text || image.alt,
			};
		});
	}

	return (
		<div className="featured-project">
			<div className="featured-project--container container">
				<p className="featured-project__label">Featured Project</p>
				{data?.title && (
					<h2 className="featured-project__title">{data.title}</h2>
				)}
				{imageData.length > 0 && (
					<div className="featured-project__images">
						{imageData.map((image, index) => (
							<div key={index} className="featured-project__image">
								<img src={image.url} alt={image.alt} />
							</div>
						))}
					</div>
				)}
				{data?.details && (
					<div
						className="featured-project__details"
						dangerouslySetInnerHTML={{ __html: data.details }}
					/>
				)}
				{data?.button && (
					<div className="featured-project__link">
						<HoverElement
							target="_blank"
							href={data?.button?.url}
							aria-label={'View Case Study: ' + data?.title}
						>
							View Case Study
						</HoverElement>
					</div>
				)}
			</div>
		</div>
	);
};

export default FeaturedProject;
