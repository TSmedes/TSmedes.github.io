import React from 'react';
import Header from '../../header';

const Page: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">TheoNotes</h1>
                
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <p>
                        This is a mobile application that allows users to create and store bible verses and notes. Users can create categories to organize their notes, and add passages to each category. The app is built with React Native and uses Supabase as the backend.
                    </p>
                </div>
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                        <img src="/images/home.png" alt="Screenshot 1" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/category.png" alt="Screenshot 2" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/passage.png" alt="Screenshot 3" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/add_passage.png" alt="Screenshot 4" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </div>
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>React Native</li>
                        <li>TypeScript</li>
                        <li>Expo</li>
                        <li>Node.js</li>
                        <li>Supabase</li>
                    </ul>
                </div>
                <div className="p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Useful Links</h2>
                    <ul className="list-disc list-inside">
                        <li><a href="https://github.com/TSmedes/TheoNotes" target='_blank' className="text-blue-500 hover:underline">GitHub Repo</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default Page;