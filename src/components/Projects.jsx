import * as React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollingText } from './ScrollingText';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';
import { RichText } from './RichText';
import { useLocation } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

export function Projects({ data }) {
	const { projects, featured_projects } = data || {};
	const location = useLocation();
	const projectSectionRef = React.useRef();

	React.useLayoutEffect(() => {
		if (!data) return;
		if (location.hash && projectSectionRef.current) {
			const id = location.hash.replace('#', '');

			if (id === 'projects') {
				projectSectionRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'nearest',
					inline: 'start',
				});
			}
		}
	}, [location, data]);

	if (!data) return null;

	return (
		<div id="projects" className="projects section" ref={projectSectionRef}>
			<ScrollingText text="Projects" />
			<FeaturedProject data={featured_projects} />
			{projects && (
				<div className="projects--container">
					{projects?.body && (
						<RichText className="projects--content" html={projects.body} />
					)}
					{projects?.featured_projects?.length > 0 && (
						<ul className="projects--list">
							{projects.featured_projects.map((project, i) => {
								return <ProjectCard project={project} i={i} key={i} />;
							})}
						</ul>
					)}
				</div>
			)}
		</div>
	);
}
