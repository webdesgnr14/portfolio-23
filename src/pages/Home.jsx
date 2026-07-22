import * as React from 'react';
import useAPI from '../hooks/useApi';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { DesignProjects } from '../components/DesignProjects';
import { CallToAction } from '../components/CallToAction';
import { LoadingContext } from '../context/LoadingContextProvider';

export const Home = () => {
	const { data: homeData, apiLoading, apiError } = useAPI('pages/2');
	const [loading] = React.useContext(LoadingContext);

	if (!apiLoading && homeData?.acf) {
		return (
			<>
				{Object.keys(homeData.acf.hero)?.length > 0 && (
					<Hero data={homeData.acf.hero} />
				)}
				{Object.keys(homeData.acf.about)?.length > 0 && (
					<About data={homeData.acf.about} />
				)}
				{Object.keys(homeData.acf.projects)?.length > 0 && (
					<Projects
						data={{
							projects: homeData.acf.projects,
							featured_project: homeData.acf.featured_project,
						}}
					/>
				)}
				{Object.keys(homeData.acf.design_projects)?.length > 0 && (
					<DesignProjects data={homeData.acf.design_projects} />
				)}
				{Object.keys(homeData.acf.contact_cta)?.length > 0 && (
					<CallToAction data={homeData.acf.contact_cta} />
				)}
			</>
		);
	} else if (apiError) {
		console.log('Error fetching home data:', apiError);
	} else if (loading || apiLoading) {
		return null;
	}
};
