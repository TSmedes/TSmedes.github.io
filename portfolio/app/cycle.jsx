import React from 'react';

const stages = [
    { name: "Orientation", content: "The purpose of the lesson and where it fits in to the larger learning event." },
    { name: "Persuasion", content: "Compelling reasons why the lesson is important to the learner or organization." },
    { name: "Lecture/Demonstration", content: "Introducing the information by lecture, dialogue, pictures, objects, diagrams, video, etc." },
    { name: "Lab/Practice", content: "Time set aside for the learner to practice and demonstrate mastery of the information." },
    { name: "Closure/Application", content: "The teacher connects what the student practiced in the lab to where and how it can be used away from the classroom." }
];

const Cycle = () => {
    return (
        <div className="container mx-auto p-4 md:py-16 text-[#333333]">
            <div className='mx-4 md:mx-[10vw] lg:mx-[20vw]'>
                <div className="flex items-center mb-8">
                    <div className="flex-1">
                        <h3 className="text-4xl mb-2 md:mb-10 text-center font-light">Adult Learning Cycle</h3>
                        <p className="font-thin">&emsp;From these information types, I have developed a model I call the Adult Learning Cycle. This is the easiest way to visualize the most effective processes for adults to learn and retain knowledge and information.</p>
                        <p className="font-thin"><br/>&emsp;The Adult Learning Cycle Model is a guideline to develop or teach lessons. It allows the teacher to always be oriented clearly in the lesson.</p>
                    </div>
                </div>
                <div className='flex justify-center mb-4 md:mb-4'>
                    <img src="/images/learning-cycle.png" alt="Learning Cycle" className="w-2/3 md:w-[80%] ml-4" />
                </div>
                <div className="space-y-8 px-8 md:px-16 mb-4 md:mb-10">
                    {stages.map((stage, index) => (
                        <div key={index} className="p-4 bg-white border-[0px] border-gray-300">
                            <h2 className="text-2xl font-light mb-2">{stage.name}</h2>
                            <p className=" font-thin">{stage.content}</p>
                        </div>
                    ))}
                </div>
                <p className="font-extralight">&emsp;The purpose of each lesson has a real world application away from the classroom, and equips the learner to continue learning without the teacher. The number of lessons is determined by the nature of the information and what the teacher needs to see in class to be confident the learner can apply it.</p>
                
            </div>
        </div>
    );
};

export default Cycle;