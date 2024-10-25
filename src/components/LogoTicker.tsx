'use client'
import acmeLogo from '../assets/images/acme.png';
import apex from '../assets/images/apex.png';
import quantum from '../assets/images/quantum.png';
import celestial from '../assets/images/celestial.png';
import echo from '../assets/images/echo.png';
import pulse from '../assets/images/pulse.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { use } from 'react';


const images = [
    { src: acmeLogo, alt: 'acme' },
    { src: apex, alt: "apex" },
    { src: quantum, alt: "quantum" },
    { src: celestial, alt: "celestial" },
    { src: echo, alt: "echo" },
    { src: pulse, alt: "pulse" },
]



export const LogoTicker = () => {
    return (
        <div className="bg-black text-white py-[72px] sm:py-24">
            <div className="container">
                <h2 className='text-center text-xl text-white/70'>Trusted by the world's most innovative teams</h2>
                <div className="overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20 relative before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))] ">
                    <motion.div
                        className="flex gap-16 "

                        initial={{ translateX: 0 }}
                        animate={{ translateX: '-50%' }}
                        transition={{
                            duration: 10,
                            ease: 'linear',
                            repeat: Infinity
                        }}
                    >
                        {images.map((image, index) => (
                            <Image key={index}
                                src={image.src}
                                alt={image.alt}
                                className='w-auto h-8 flex-none pr-16' />
                        ))}
                        {images.map((image, index) => (
                            <Image key={index}
                                src={image.src}
                                alt={image.alt}
                                className='w-auto h-8 flex-none' />
                        ))}
                    </motion.div>

                </div>

            </div>
        </div>
    )
}