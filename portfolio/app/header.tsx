import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white border-b-2 border-[#eeeedc] shadow flex justify-between items-center">
            <h1 className="text-[#333333] text-3xl font-thin py-4 sm:py-6 pl-4 sm:pl-6 md:pl-10 lg:pl-16 pr-4">Tobias Smedes</h1>
            <nav>
                <ul className="flex space-x-4 mt-2 mr-4 sm:mr-6 md:mr-10 lg:mr-16">
                    <li><Link href="/" className="text-[#605f6d] hover:text-gray-400 border-b-2 border-[#eeeedc]">Home</Link></li>
                    <li><Link href="/projects" className="text-[#605f6d] hover:text-gray-400 border-b-2 border-[#eeeedc]">Projects</Link></li>
                    <li><Link href="/#contact" className="text-[#605f6d] hover:text-gray-400 border-b-2 border-[#eeeedc]">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;