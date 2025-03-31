import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg drop-shadow-md overflow-hidden mt-10">
            <div className="px-6 py-4">
                <div className="text-xl mb-6">Tobias Smedes</div>
                <p className="font-light text-gray-700 text-base mb-4">
                    Email: tobysmedes@gmail.com
                </p>
                <p className="font-light text-gray-700 text-base mb-4">
                    LinkedIn: <a href="https://www.linkedin.com/in/toby-smedes/" target="_blank" className="underline font-light">Tobias Smedes</a>
                </p>
                <p className="font-light text-gray-700 text-base mb-4">
                    Resume: <a href="/files/resume_public.pdf" download className="underline font-light">Download Resume</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;