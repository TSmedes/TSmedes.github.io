import React from 'react';

const About = () => {
    return (
        <div className=" mt-4 p-6 w-screen mx-auto bg-[#eeeedc] text-[#333333] md:my-16">
            <div className="mx-4 md:mx-[10vw] lg:mx-[20vw]">
                <h1 className="text-4xl font-light my-4 sm:mb-8 md:mb-12 text-center">About Me</h1>
                <h2 className="text-2xl font-light mb-4 md:mb-8">Background</h2>
                <p className="text-lg mb-4 font-thin">
                    &emsp;I am a current 
                    <strong> student </strong> at Seattle Pacific University. I am pursuing a Bachelor of Science in Computer Science. I plan to 
                    <strong> graduate </strong> in 
                    <strong> 2025. </strong> I have been interested in all things related to computers, programming and algorithms for a while now and every new thing I learn excites me. The opportunity to get hands on experience in any and all sorts of software development, algorithm design and anything else computer science related motivates me.
                </p>
                <h2 className="text-2xl font-light mb-4 md:mb-8">Education</h2>
                <p className="text-lg mb-4 font-thin">
                    &emsp;In my High School, I was part of a program called Running Start. This allowed me to attend a nearby community college to pursue and earn an associate degree. During this program I attended Green River Community College in Auburn, WA where I earned an 
                    <strong> Associate in Computer Science </strong> Direct Transfer Agreement in the spring of 2023, while simultaneously graduating high school. In the fall of 2023, I started school at 
                    <strong> Seattle Pacific Univeristy </strong> where I have been studying to complete my bachelor degree in Computer Science. As a recent high school graduate, and a soon-to-be college graduate, I have been propelled into the world of computer science and am eager to get more hands on experience in the industry. 
                </p>
                <h2 className="text-2xl font-light mb-4 md:mb-8">Experience</h2>
                <p className="text-lg mb-4 font-thin">
                    &emsp;So far, I have completed an 
                        <strong> internship </strong> 
                        in the 
                        <strong> summer of 2024. </strong> 
                        During this internship, I worked with a small start-up, 
                        <strong> Teidore. </strong> 
                        I gained a greate deal of hands-on experience with technologies and frameworks. I worked extensively with Three.js, a 
                        <strong> React </strong> 
                        framework for 3D rendering, and learned a lot about the process of creating 3D models and rendering them in a web browser. I also worked with the team to redesign the website for the company. I learned a lot about the process of working with React and the importance of user experience and design. 
                    <br/>&emsp;During this internship, I also used 
                    <strong> python </strong> 
                    scripts to crawl and scrape product data from online retailers. To do this, I learned a lot about 
                    <strong> Selenium and Beautiful Soup. </strong> 
                    I also learned a lot about the process of data cleaning and data analysis.
                </p>
            </div>
            
        </div>
    );
};

export default About;