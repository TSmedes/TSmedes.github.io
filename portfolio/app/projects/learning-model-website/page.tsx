import React from 'react';
import Header from '../../header';

const Page: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">Learning Model Website</h1>
                
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <p>
                        I developed a website at the request of a customer that explains the steps and process of the learning model they use in their business. It is a static website that is hosted on Firebase. The website is built with React and TypeScript, and styled with Tailwind CSS. The website is a single page application that is responsive and mobile-friendly.
                    </p>
                </div>
                <div className=''>
                    <img src={'../../../images/learning-model.png'} alt={'Website thumbnail'} className="project-thumbnail w-full h-full object-cover mb-4 rounded-lg" />
                </div>
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Node.js</li>
                        <li>Vite</li>
                        <li>Git</li>
                        <li>Firebase</li>

                    </ul>
                </div>
                <div className="p-4 border rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Useful Links</h2>
                    <ul className="list-disc list-inside">
                        <li><a href="https://adultlearningmodel.com" target='_blank' className="text-blue-500 hover:underline">Live Site</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default Page;