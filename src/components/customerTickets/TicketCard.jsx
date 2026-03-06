import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const TicketCard = ({ id, title, description, customer, priority, status, createdAt, handleClickStatus }) => {
    return (
        <div className="card shadow-md bg-white rounded-sm" onClick={() => handleClickStatus({ id, title, description, customer, priority, status, createdAt })}>
            <div className="card-body">
                <h1 className="card-title justify-between text-base">
                    {title}
                    <span className={`badge badge-soft ${status === 'open' ? 'badge-success bg-[#B9F8CF]' : 'badge-warning bg-[#F8F3B9]'} py-4 rounded-full b-0`}>
                        <FontAwesomeIcon className={status === 'open' ? 'text-[#02A53B]' : 'text-[#FEBB0C]'} icon={faCircle} />
                        <span className={status === 'open' ? 'text-[#0B5E06]' : 'text-[#9C7700]'}>{status == "open" ? "Open" : "In-Progress"}</span>
                    </span>
                </h1>
                <p className='text-gray-500 my-0 font-lg'>{description}</p>
                <div className="text-gray-500 flex justify-between items-center">
                    <div>
                        <span>#{id}</span>
                        <span className={`text-${priority == 'high' ? 'red' : priority == 'medium' ? 'yellow' : 'green'}-500 font-semibold px-1 text-sm`}>
                            {priority.toUpperCase()} PRIORITY
                        </span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='mr-2'>{customer}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <p>{createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;