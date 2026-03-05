import React from 'react';
import BannerCard from './BannerCard';

const Banner = () => {
    return (
        <div className='flex gap-4 my-4 w-[1200px] mx-auto justify-center'>
            <BannerCard content={{ title: "In Progress", count: 5 }} />
            <BannerCard content={{ title: "Resolved", count: 10 }} />
        </div>
    );
};

export default Banner;