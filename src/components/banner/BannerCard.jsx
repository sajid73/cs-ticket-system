import React from 'react';

const BannerCard = ({content}) => {
    const { title, count } = content;
    return (
        <div className='text-dark rounded-lg p-4 w-[300px] bg-primary border-2 border-dark  '>
            <h1 className='text-center text-2xl font-bold'>{title}</h1>
            <p className='text-center text-lg'>{count}</p>
        </div>
    );
};

export default BannerCard;