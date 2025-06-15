import React from 'react';

const Projects = () => {
    return (
        <div className="p-6 my-4 md:my-16 text-[#333333]">
            <div className='mx-4 md:mx-[10vw] lg:mx-[20vw]'>
                <h2 className="text-4xl text-center font-light my-4 sm_mb-8 md:mb-12">Who is this For?</h2>
                <p className="text-lg text-left font-extralight mb-4">
                    Our learning model has a wide range of applications across various organizational departments:
                </p>
                <ul className="list-disc list-inside font-light">
                    <li className="font-thin"><strong>Training and Education:</strong> Designed for teachers, instructors, and educators seeking to improve teaching methods and facilitate student learning.</li>
                    <li className="font-thin"><strong>Organizational Development:</strong> Ideal for internal consultants who aim to boost productivity and foster a culture of continuous improvement within the organization.</li>
                    <li className="font-thin"><strong>Human Resources:</strong> Helps HR professionals implement effective learning and development programs that align with employee needs and company goals.</li>
                    <li className="font-thin"><strong>Professional Development:</strong> Supports managers and team leads in nurturing employee growth and preparing them for new responsibilities or roles.</li>
                    <li className="font-thin"><strong>Adult Continuing Education:</strong> Suitable for anyone responsible for skill acquisition, assessment, and lifelong learning initiatives.</li>
                    <li className="font-thin"><strong>Technical Writing:</strong> Benefits technical writers, managers who write memos, and employees who may excel from additional oral and written communication skills.</li>
                </ul>
            </div>
        </div>
    );
};

export default Projects;