import React from 'react';
import { items } from './project-list';
import Header from '../header';
import Link from 'next/link';
// import Image from 'next/image';

const Page = () => {
    return (
        <div>
            <Header />
            <div className="projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {items.map((project, index) => (
                <div key={index} className="project-tile bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="project-thumbnail w-full h-48 object-cover" />
                    <div className="p-4">
                    <h2 className="project-title text-xl font-semibold mb-2">{project.title}</h2>
                    <p className="project-summary text-gray-700 mb-4">{project.summary}</p>
                    {/* <p className=" text-gray-700 mb-4">This was an individual project.</p> */}
                    <Link href={project.details} className="project-details text-blue-500 hover:underline">View Details</Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
        
    );
};

export default Page;