import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

const Navbar = () => {
    return (
        <div className="navbar bg-white w-lg-[1280px] w-full mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">CS — Ticket System</a>
            </div>
            <div className="flex justify-end items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
                        <li>Home</li>
                        <li>FAQ</li>
                        <li>Changelog</li>
                        <li>Blog</li>
                        <li>Download</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none rounded-sm">
                    <FontAwesomeIcon icon={faPlus} />
                    New Ticket
                </button>
            </div>
        </div>
    );
};

export default Navbar;