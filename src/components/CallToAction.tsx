'use client'
import helixImage from '../assets/images/helix2.png';
import emojiStar from '../assets/images/emojistar.png';
import Image from 'next/image';
import { use, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


export const CallToAction = () => {
    const callToActionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: callToActionRef,
        offset: ["start end", "end end"]
    });
    useEffect(() => {
        if (!callToActionRef.current) return; // Ensure the ref is not null
        const unsubscribe = scrollYProgress.on("change", (latest) => {

        });
        return () => unsubscribe();
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);


    return (
        <div className="bg-black text-white py-[72px] sm:py-24">
            <div className="container max-w-xl relative" ref={callToActionRef}>
                <motion.div
                    style={{ translateY }}
                >
                    <Image src={helixImage} alt="helix" className="absolute top-6 left-[calc(100%+36px)] hidden sm:block" />
                </motion.div>
                <motion.div
                    style={{ translateY }}
                >
                    <Image src={emojiStar} alt="emoji star" className="absolute -top-[120px] right-[calc(100%+24px)] hidden sm:block" />
                </motion.div>
                <h2 className="text-center text-5xl sm:text-6xl mx-auto max-w-[540px] tracking-tighter font-bold">
                    Get instant access
                </h2>
                <p className="text-center text-white/60 mt-4">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                <form action="" className="mt-12">
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 justify-center items-center max-w-[540px] mx-auto">
                        <input type="email" placeholder="Enter your email" className="w-full sm:w-3/5 p-4 sm:h-12 rounded-md bg-white/10" />
                        <button type="submit" className="w-full sm:w-1/4 p-2 h-12 rounded-md bg-white text-black mt-4 sm:mt-0">Get access</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
