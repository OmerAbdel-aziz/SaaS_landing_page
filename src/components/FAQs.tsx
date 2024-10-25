"use client";
import { useState } from 'react';
import clsx from 'clsx';
import PlusIcon from '../assets/icons/plus.svg';

const faqs = [
    {
        question: "What payment methods do you accept?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
        question: "How does the pricing work for teams?",
        answer: "You can create multiple teams and assign tasks to them. You can also assign tasks to yourself.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos"
    },
    {
        question: "Can I change my payment plan later?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
        question: "Is my data secure?",
        answer: "Yes, data security is our top priority. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    }
];

const Accordion = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div key={index} className="py-7 border-b border-white/60">
            <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <span className="flex-1 text-lg font-bold">{faq.question}</span>
                <PlusIcon className={`transform transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`} />
            </div>
            <div className={`mt-4 text-white/60 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                {faq.answer}
            </div>
        </div>
    )
}

export const FAQs = () => {
    return (
        <div className="bg-[linear-gradient(180deg,_#5D2CA8_0%,_#000000_100%)] text-white py-[72px] sm:py-24">
            <div className="container md:max-w-3xl">
                <h2 className="text-center text-5xl sm:text-6xl mx-auto max-w-[540px] tracking-tighter font-bold">
                    Frequently asked questions
                </h2>
                <div className="mt-12">
                    {faqs.map((faq, index) => (
                        <Accordion faq={faq} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
