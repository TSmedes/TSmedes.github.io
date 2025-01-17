import React from 'react';
import Header from '../../header';

const Page: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">Grocery Unit</h1>
                
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <p>
                        The app allows the user to add items they commonly purchase from the store and add them to their list. Furthermore, the user can add prices from specific locations and retailers with for each item, by either the unit price, or the total price and the unit price will be calculated for them. This allows the user to be able to easily see where the cheapest location is to purchase any given item.
                    </p>
                </div>
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="/images/grocery-login.png" alt="Screenshot 1" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/grocery-home.png" alt="Screenshot 2" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/grocery-product.png" alt="Screenshot 3" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/grocery-edit.png" alt="Screenshot 4" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </div>
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Node.js</li>
                        <li>Supabase</li>
                    </ul>
                </div>
                <div className="p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Useful Links</h2>
                    <ul className="list-disc list-inside">
                        <li><a href="https://github.com/TSmedes/Grocery-Unit" target='_blank' className="text-blue-500 hover:underline">GitHub Repo</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default Page;