import React from 'react';
import Banner from './Banner';
import HighlightsBar from './HighlightsBar';
import CraftPrinciples from './CraftPrinciples';
import Skills from './Skills';
import WorkExperienceSection from './WorkExperienceSection';
import FeaturedProjects from './FeaturedProjects';
import Blogs from './Blogs';

const AboutMe = () => {
    return (
        <div className="w-full overflow-x-hidden bg-zinc-50 dark:bg-zinc-950">
            <Banner />
            <HighlightsBar />
            <CraftPrinciples />
            <Skills />
            <WorkExperienceSection />
            <FeaturedProjects />
            <Blogs />
        </div>
    );
};

export default AboutMe;
