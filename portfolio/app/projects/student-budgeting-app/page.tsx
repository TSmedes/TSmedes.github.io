import React from 'react';
import Header from '../../header';

const Page: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">System Proposal</h1>
                
                <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <p>
                        This is a mock system design plan I made. The project is a mobile application that allows students to budget their finances and log school-related expenses.<br/><br/> The System Proposal document is the initial proposal for the project. It outlines the necessary components and acts as an initial proposed system.<br/><br/> The System Specification document specifies the technical aspects of the system. In it you will find everything form class diagrams to UI wireframes.
                    </p>
                </div>
                
                {/* <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Node.js</li>
                        <li>Express</li>
                    </ul>
                </div> */}
                <div className="mb-4 p-4 border rounded-lg shadow-md flex justify-around">
                    <iframe src='https://1drv.ms/w/s!AkZO_laNEg2GmNR7DvOIWap1wsIWBQ?embed=1&em=2' width='700' height='750' frameBorder='0'></iframe>
                    <iframe src="https://1drv.ms/w/s!AkZO_laNEg2GmNR8L7Ci0ros0Uw5GQ?embed=1&em=2" width="700" height="750" frameBorder="0" scrolling="no"></iframe>

                </div>
                <div className="p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Useful Links</h2>
                    <ul className="list-disc list-inside">
                        <li><a href="/files/System_Proposal.docx" target='_blank' className="text-blue-500 hover:underline">System Proposal (docx)</a></li>
                        <li><a href="/files/System_Specification.docx" target='_blank' className="text-blue-500 hover:underline">System Specification (docx)</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default Page;