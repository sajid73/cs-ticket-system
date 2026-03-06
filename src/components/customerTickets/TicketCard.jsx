import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const TicketCard = ({ id, title, description, customer, priority, status, createdAt, handleClickStatus }) => {
    return (
        <div
            className="shadow-md bg-white rounded-lg w-full p-4 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() =>
                handleClickStatus({ id, title, description, customer, priority, status, createdAt })
            }
        >
            <div>
                <div className="flex justify-between items-center mb-2">
                    {/* Title */}
                    <h1 className="text-base sm:text-lg font-semibold truncate">
                        {title}
                    </h1>
                    <span
                        className={`badge badge-soft py-1 px-3 rounded-full flex items-center gap-2 w-max ${status === "open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"
                            }`}
                    >
                        <FontAwesomeIcon
                            className={status === "open" ? "text-[#02A53B]" : "text-[#FEBB0C]"}
                            icon={faCircle}
                        />
                        <span className={status === "open" ? "text-[#0B5E06]" : "text-[#9C7700]"}>
                            {status === "open" ? "Open" : "In-Progress"}
                        </span>
                    </span>
                </div>
                <p className="text-gray-500 text-sm sm:text-base mb-4">{description}</p>
                <div className="flex flex-wrap justify-between items-start sm:items-center text-gray-500 gap-2">
                    <div className="flex flex-wrap gap-2 items-start sm:items-center">
                        <span className="font-medium">#{id}</span>
                        <span
                            className={`font-semibold px-2 py-1 text-xs sm:text-sm rounded w-max ${priority === "high"
                                ? "text-red-700 bg-red-100"
                                : priority === "medium"
                                    ? "text-yellow-700 bg-yellow-100"
                                    : "text-green-700 bg-green-100"
                                }`}
                        >
                            {priority.toUpperCase()} PRIORITY
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                        <p className="whitespace-nowrap">{customer}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                            />
                        </svg>
                        <p className="whitespace-nowrap">{createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;