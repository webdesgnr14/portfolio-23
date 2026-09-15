import { HoverElement } from './HoverElement';
import { RichText } from './RichText';

export const FeaturedProject = ({ data }) => {
	if (!data?.title || !data?.image || !data?.button) return null;

	return (
		<div className="featured-project">
			<div className="featured-project--container container">
				<p className="featured-project__label">Featured Project</p>
				{data?.title && (
					<h2 className="featured-project__title">{data.title}</h2>
				)}
				{data?.image && (
					<div className="featured-project__images">
						<div className="featured-project__image">
							<img src={data.image.url} alt={data.image.alt} />
						</div>
					</div>
				)}
				{data?.details && (
					<RichText
						className="featured-project__details"
						html={data.details}
					/>
				)}
				{data?.button && (
					<div className="featured-project__link">
						<HoverElement
							target="_blank"
							href={data.button}
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
