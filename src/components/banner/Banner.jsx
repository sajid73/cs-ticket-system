import React from 'react';
import BannerCard from './BannerCard';

const Banner = ({ inProgress, resolved }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 my-4 max-w-[1280px] mx-auto justify-center px-4">
            <BannerCard content={{ title: "In Progress", count: inProgress.length }} />
            <BannerCard content={{ title: "Resolved", count: resolved.length }} />
        </div>
    );
};

export default Banner;