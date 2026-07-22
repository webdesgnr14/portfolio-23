import * as React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useAPI from '../hooks/useApi';
import { LoadingContext } from '../context/LoadingContextProvider';
import { Image } from '../components/Image';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ProjectSection } from '../components/ProjectSection';
import { ColorList } from '../components/ColorList';
import { TypeList } from '../components/TypeList';
import { Pagination } from '../components/Pagination';

gsap.registerPlugin(ScrollTrigger);

const Slider = React.lazy(() =>
	import('../components/Slider').then((module) => ({
		default: module.Slider,
	}))
);

export const Project = () => {
	const [searchParams] = useSearchParams();
	const id = searchParams.get('project_id');
	const {
		data: projectData,
		loading: projectLoading,
		error: projectError,
	} = useAPI('project/' + id);
	const {
		data: homepageData,
		loading: homepageLoading,
		error: homepageError,
	} = useAPI('pages/2');
	const [loading] = React.useContext(LoadingContext);
	const navigate = useNavigate();
	const paginationData = homepageData?.acf?.design_projects?.projects;

	//Intro Refs
	const sectionRef = React.useRef();
	const headingRef = React.useRef();
	const contentRef = React.useRef();
	const logoRef = React.useRef();

	//Type Refs
	const typeSectionRef = React.useRef();
	const typeHeadingRef = React.useRef();
	const typeListRef = React.useRef();
	const paletteHeadingRef = React.useRef();
	const paletteListRef = React.useRef();

	const animateIntro = () => {
		const tl = gsap.timeline({
			duration: 0.6,
			ease: 'power1.inOut',
			scrollTrigger: sectionRef.current,
			delay: 1.2,
		});
		tl.fromTo(
			contentRef.current,
			{ opacity: 0, x: -40 },
			{ opacity: 1, x: 0, duration: 0.2 }
		);
		tl.fromTo(
			logoRef.current,
			{ opacity: 0, x: 40 },
			{ opacity: 1, x: 0, duration: 0.2, delay: 0.2 }
		);
	};

	const animateTypeSection = () => {
		const tl = gsap.timeline({
			duration: 0.6,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: typeSectionRef.current,
				start: 'top center',
				end: 'center center',
			},
		});
		tl.fromTo(
			typeHeadingRef.current,
			{ opacity: 0, y: 40 },
			{ opacity: 1, y: 0, duration: 0.2 }
		);
		tl.fromTo(
			typeListRef.current,
			{ opacity: 0, y: 40 },
			{ opacity: 1, y: 0, duration: 0.2, delay: 0.2 }
		);
		tl.fromTo(
			paletteHeadingRef.current,
			{ opacity: 0, y: 40 },
			{ opacity: 1, y: 0, duration: 0.2, delay: 0.4 }
		);
		tl.fromTo(
			paletteListRef.current,
			{ opacity: 0, y: 40 },
			{ opacity: 1, y: 0, duration: 0.2, delay: 0.6 }
		);
	};

	if (!id) return navigate('/404');
	if (projectError) console.log('Error fetching project data:', projectError);
	if (homepageError)
		console.log('Error fetching homepage data:', homepageError);

	if (projectData?.acf) {
		return (
			<div className="project">
				{(projectData?.acf?.heading ||
					projectData?.acf?.body ||
					projectData?.acf?.logo) && (
					<ProjectSection
						name="intro"
						ref={sectionRef}
						func={animateIntro}
						funcReqs={[sectionRef.current, contentRef.current, logoRef.current]}
					>
						{(projectData?.acf?.heading || projectData?.acf?.body) && (
							<div className="project--content" ref={contentRef}>
								{projectData?.acf?.heading && (
									<h1 ref={headingRef}>{projectData.acf.heading}</h1>
								)}
								{projectData?.acf?.body && (
									<div
										className="project--body"
										dangerouslySetInnerHTML={{ __html: projectData.acf.body }}
									/>
								)}
							</div>
						)}
						{projectData?.acf?.logo && (
							<div className="project--logo" ref={logoRef}>
								<div className="project--logo--img">
									<Image id={projectData.acf.logo} />
								</div>
								{projectData?.acf?.logo_description && (
									<div className="project--logo--details">
										{projectData.acf.logo_description}
									</div>
								)}
							</div>
						)}
					</ProjectSection>
				)}
				{(projectData?.acf?.typography?.length > 0 ||
					projectData?.acf?.color_palette?.length > 0) && (
					<ProjectSection
						name="typo-palette"
						func={animateTypeSection}
						funcReqs={[
							typeHeadingRef.current,
							typeSectionRef.current,
							typeListRef.current,
							paletteHeadingRef.current,
							paletteListRef.current,
						]}
						ref={typeSectionRef}
					>
						{projectData?.acf?.typography?.length > 0 && (
							<div className="project--typography">
								<div className="project--content">
									<h2 ref={typeHeadingRef}>Typography</h2>
									<TypeList
										fonts={projectData.acf.typography}
										ref={typeListRef}
									/>
								</div>
							</div>
						)}
						{projectData?.acf?.color_palette?.length > 0 && (
							<div className="project--color-palette">
								<div className="project--content">
									<h2 ref={paletteHeadingRef}>Color Palette</h2>
									<ColorList
										colors={projectData.acf.color_palette}
										ref={paletteListRef}
									/>
								</div>
							</div>
						)}
					</ProjectSection>
				)}
				{projectData?.acf?.design_samples?.length > 0 && (
					<div
						className="project--section project--samples"
						id="project--samples"
					>
						<div className="project--section--inner">
							<div className="container">
								<div className="project--content">
									<h2>Design Samples</h2>
								</div>
							</div>
						</div>
						<React.Suspense fallback={null}>
							<Slider design_samples={projectData.acf.design_samples} />
						</React.Suspense>
						<Pagination data={paginationData} />
					</div>
				)}
			</div>
		);
	} else if (
		!projectData?.acf ||
		projectLoading ||
		homepageLoading ||
		loading.isLoading
	) {
		return null;
	}
};
