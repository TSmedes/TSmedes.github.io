import React from 'react';
import Header from '../../header';

const Page: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">Parser in Go</h1>
                
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <p>
                        This project was created for a class at Seattle Pacific University. The goal was to create a parser in Go that could parse a language with a made-up grammar. The program will produce the equivalent code in either prolog or scheme, depending on command line flags.
                    </p>
                </div>
                <div className=''>
                    <img src={'../../../images/go-parser-prolog.png'} alt={'Website thumbnail'} className="project-thumbnail w-full h-full object-cover mb-4 rounded-lg" />
                    <img src={'../../../images/go-parser-scheme.png'} alt={'Website thumbnail'} className="project-thumbnail w-full h-full object-cover mb-4 rounded-lg" />
                    <img src={'../../../images/go-parser-error.png'} alt={'Website thumbnail'} className="project-thumbnail w-full h-full object-cover mb-4 rounded-lg" />
                </div>
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>Go</li>
                        <li>Prolog</li>
                        <li>Scheme</li>

                    </ul>
                </div>
                <div className="p-4 border rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Useful Links</h2>
                    <ul className="list-disc list-inside">
                        <li><a href="https://github.com/TSmedes/go-parser" target='_blank' className="text-blue-500 hover:underline">GitHub Repo</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default Page;