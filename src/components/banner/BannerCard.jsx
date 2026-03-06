import React from 'react';
import './Banner.css'
import wave from './../../assets/vector1.png';

const BannerCard = ({ content }) => {
    const { title, count } = content;
    return (
        <div className={`card ${title == "In Progress" ? "card-progress" : "card-resolved"}`}>
            <img src={wave} className="wave wave-left" alt="left-svg" />
            <img src={wave} className="wave wave-right" alt="right-svg" />

            <div className="text-center text-lg">{title}</div>
            <div className="text-center text-5xl font-semibold my-4">{count}</div>
        </div>
    );
};

export default BannerCard;