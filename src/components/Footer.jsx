import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="container footer sm:footer-horizontal bg-neutral text-neutral-content p-10 footer-class">
            <aside className='w-80'>
                <h2 className='font-bold text-white text-xl'>CS — Ticket System</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </aside>
            <nav>
                <h6 className="text-white font-300 text-lg">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Our Mission</a>
                <a className="link link-hover">Contact Saled</a>
            </nav>
            <nav>
                <h6 className="text-white font-300 text-lg">Services</h6>
                <a className="link link-hover">Products & Services</a>
                <a className="link link-hover">Customer Stories</a>
                <a className="link link-hover">Download Apps</a>
            </nav>
            <nav>
                <h6 className="text-white font-300 text-lg">Information</h6>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Join Us</a>
            </nav>
            <nav>
                <h6 className="text-white font-300 text-lg">Social Links</h6>
                <a className="link link-hover flex items-center gap-2" href='https://www.x.com/cs-ticketsystem'> <FontAwesomeIcon className="text-black bg-white p-0.5 rounded-full" icon={faXTwitter} /> @CS-Ticket System</a>
                <a className="link link-hover flex items-center gap-2" href='https://www.linkedin.com/in/cs-ticket-system'> <FontAwesomeIcon className="text-black bg-white p-0.5 rounded-full" icon={faLinkedinIn} /> @CS-Ticket System</a>
                <a className="link link-hover flex items-center gap-2" href='https://www.facebook.com/cs-ticketsystem'> <FontAwesomeIcon className="text-black bg-white p-0.5 rounded-full" icon={faFacebookF} /> @CS-Ticket System</a>
                <a className="link link-hover flex items-center gap-2" href='mailto:support@cst.com'> <FontAwesomeIcon className="text-black bg-white p-0.5 rounded-full" icon={faEnvelope} /> support@cst.com</a>
            </nav>
        </footer>
    );
};

export default Footer;