'use client'

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import AppScreen from '../assets/images/app-screen.png';
import { use, useEffect, useRef } from 'react';

export const ProductShowCase = () => {
    const appImage = useRef<HTMLImageElement>(null);
    const { scrollYProgress } = useScroll({
        target: appImage,
        offset: ["start end", "end end"],
    });
    useEffect(() => {
        if (!appImage.current) return; // Ensure the ref is not null
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            appImage.current!.style.transform = `scaleY(${latest})`;
        });

        return () => unsubscribe(); // Clean up the subscription
    }, [scrollYProgress]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="bg-[linear-gradient(to_bottom,#000,#5D2CA8_100%)] text-white py-[72px] sm:py-24">
            <div className="container">
                <h2 className='text-center text-5xl sm:text-6xl tracking-tighter font-bold py-6'>Intuitive interface</h2>
                <div className="max-w-xl mx-auto">
                    <p className="text-center text-xl text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
                </div>

                <motion.div
                    ref={appImage} // Ensure the ref is attached to the motion.div
                    style={{
                        opacity: opacity,
                        rotateX: rotateX,
                        transformPerspective: 800,
                    }}
                >
                    <Image src={AppScreen} alt="" className='mx-auto mt-14' width={1000} height={1000} />
                </motion.div>
            </div>
        </div>
    )
}
