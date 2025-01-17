import React from 'react';
import Header from '../../header';

const Page: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">Texas Hold&apos;em</h1>
                
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <p>
                        This is a project I created to learn more about Rust. It is a Texas Hold&apos;em poker game that allows the user to play in the CLI. The game is played against automated opponents. I learned about several data types in Rust for this project.
                    </p>
                </div>
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                        <img src="/images/title_screen.png" alt="Screenshot 1" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/initial_cards.png" alt="Screenshot 2" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/betting_round.png" alt="Screenshot 3" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/community_cards.png" alt="Screenshot 4" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/winning_hand.png" alt="Screenshot 4" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </div>
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Demo Video</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/C376Qq5Nx9A?si=7d44r2b0za9afkYn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>Rust</li>
                    </ul>
                </div>
                <div className="p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Useful Links</h2>
                    <ul className="list-disc list-inside">
                        <li><a href="https://github.com/TSmedes/texas-holdem" target='_blank' className="text-blue-500 hover:underline">GitHub Repo</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default Page;