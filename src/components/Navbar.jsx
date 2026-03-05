import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">CS - Ticket System</a>
            </div>
            <div className="flex justify-end items-center">
                <ul className='flex gap-4 mx-4'>
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Changelog</li>
                    <li>Blog</li>
                    <li>Download</li>
                    <li>Contact</li>
                </ul>
                <button className="btn bg-primary text-dark">
                    New Ticket
                </button>
            </div>
        </div>
    );
};

export default Navbar;