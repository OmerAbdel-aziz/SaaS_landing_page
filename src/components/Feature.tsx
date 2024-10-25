"use client";

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef } from 'react';

export const Feature = ({ feature, index }: { feature: { title: string, text: string, src: string | StaticImageData }, index: number }) => {

    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const border = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return;
            const borderRect = border.current.getBoundingClientRect();
            offsetX.set(e.clientX - borderRect.x);
            offsetY.set(e.clientY - borderRect.y);
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div key={index} className='relative border border-white/30 rounded-xl text-center py-8 px-4'>
            <motion.div
                className='absolute inset-0 border-2 border border-purple-400 rounded-xl'
                style={{
                    maskImage: maskImage,
                    WebkitMaskImage: maskImage,
                }}
                ref={border}
            ></motion.div>
            <div className='inline-flex justify-center bg-white text-black p-4 rounded-lg'>

                <Image src={feature.src} alt={`${feature.title} icon`} width={40} height={40} />
            </div>
            <h3 className='text-xl font-bold mt-4'>{feature.title}</h3>
            <p className='text-md mt-2 text-white/70'>{feature.text}</p>
        </div>
    );
};
