import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

const Navbar = () => {
    return (
        <div className="navbar bg-white w-[1200px] mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">CS — Ticket System</a>
            </div>
            <div className="flex justify-end items-center">
                <ul className='flex gap-8 mx-8'>
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Changelog</li>
                    <li>Blog</li>
                    <li>Download</li>
                    <li>Contact</li>
                </ul>
                <button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none rounded-sm">
                    <FontAwesomeIcon icon={faPlus} />
                    New Ticket
                </button>
            </div>
        </div>
    );
};

export default Navbar;