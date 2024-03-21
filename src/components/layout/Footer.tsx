import React from 'react';

const Footer = () => {
    return (
        <footer className='px-4 py-2 text-white bg-amber-300'>
            <h2 className='uppercase text-xl'>Contacts</h2>
            <ul>
                <li>
                    <a href="https://github.com/bohdan-datsenko" target='_blank'>Github</a>
                </li>
                <li>
                    <a href="https://ua.linkedin.com/in/bohdan-datsenko-2788a622b">LinkedIn</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
