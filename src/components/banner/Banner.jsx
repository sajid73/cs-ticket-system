import React from 'react';
import BannerCard from './BannerCard';

const Banner = ({ inProgress, resolved }) => {
    return (
        <div className='flex gap-4 my-4 w-[1280px] mx-auto justify-center'>
            <BannerCard content={{ title: "In Progress", count: inProgress.length }} />
            <BannerCard content={{ title: "Resolved", count: resolved.length }} />
        </div>
    );
};

export default Banner;