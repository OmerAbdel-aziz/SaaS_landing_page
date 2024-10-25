"use client";

import Ecosystem from '../assets/icons/ecosystem.svg';
import FeatureImage from '../assets/images/Feature.png'; // Import the image
import { Feature } from './Feature';
import { StaticImageData } from 'next/image';

const features: Array<{ title: string; text: string; src: string | StaticImageData }> = [
    { title: "Integration Ecosystem", text: "Enhance your productivity by connecting with your tools, keeping your essentials in one place.", src: FeatureImage },
    { title: "Goal Setting and Tracking", text: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.", src: FeatureImage },
    { title: "Secure Data Encryption", text: "With end-to-end encryption, your data is securely stored and protected from unauthorized access.", src: FeatureImage },
];

export const Features = () => {
    return (
        <div className="bg-black text-white py-[72px]">
            <div className="container">
                <h2 className='text-center text-5xl tracking-tighter font-bold py-6'>Everything you need</h2>
                <div className='max-w-xl mx-auto'>
                    <p className='text-center text-xl text-white/70'>Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
                </div>

                <div className='flex flex-col sm:flex-row justify-center gap-4 mt-12'>
                    {features.map((feature, index) => (
                        <Feature key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
