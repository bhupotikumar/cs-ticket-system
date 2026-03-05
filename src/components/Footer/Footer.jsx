import React from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { FaFacebook, FaFacebookF, FaLinkedin, FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="">
            <footer className="footer sm:footer-horizontal bg-base-200 p-10 text-gray-200 text-sm">
                <aside>
                    <h1 className='text-xl font-bold'>CS — Ticket System</h1>
                    <p>CS Ticket is a Customer Support Zone to communication between customers and support teams. It provides a structured ticketing system that ensures tracked, managed, and resolved.</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className="flex gap-2 items-center">
                        <figure className='w-6 h-6 rounded-full border flex justify-center items-center p-1'>
                            <FaXTwitter />
                        </figure>
                        <a className="link link-hover">@CS - Ticket System</a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <figure className='w-6 h-6 rounded-full border flex justify-center items-center p-1'>
                            <FaLinkedin />
                        </figure>
                        <a className="link link-hover">@CS - Ticket System</a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <figure className='w-6 h-6 rounded-full border flex justify-center items-center p-1'>
                            <FaFacebookF />
                        </figure>
                        <a className="link link-hover">@CS - Ticket System</a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <figure className='w-6 h-6 rounded-full border flex justify-center items-center p-1'>
                            <FaMailBulk />
                        </figure>
                        <a className="link link-hover">support@cst.com</a>
                    </div>
                </nav>
            </footer>
            <aside className="bg-gray-700 p-2 text-gray-200">
                <p className='ml-12'>Copyright © {new Date().getFullYear()} - All right reserved.</p>
            </aside>
        </div>
    );
};

export default Footer;