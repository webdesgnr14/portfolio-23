import React from 'react';
import useAPI from '../hooks/useApi';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { DesignProjects } from '../components/DesignProjects';
import { CallToAction } from '../components/CallToAction';

export const Home = () => {
    const data = useAPI('pages/2');

    if (!data.acf) return null;

    return (
        <>
            {Object.keys(data.acf.hero)?.length > 0 && <Hero data={data.acf.hero} />}
            {Object.keys(data.acf.about)?.length > 0 && <About data={data.acf.about} />}
            {Object.keys(data.acf.projects)?.length > 0 && <Projects data={data.acf.projects} />}
            {Object.keys(data.acf.design_projects)?.length > 0 && <DesignProjects data={data.acf.design_projects} />}
            {Object.keys(data.acf.contact_cta)?.length > 0 && <CallToAction data={data.acf.contact_cta} />}
        </>
    );
}