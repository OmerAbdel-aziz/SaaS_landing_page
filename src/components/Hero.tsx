'use client'
import ArrowWIcon from '../assets/icons/arrow-w.svg';
import cursor from '../assets/images/cursor.png';
import message from '../assets/images/message.png';
import Image from 'next/image';
import { motion } from 'framer-motion';



export const Hero = () => {
    return (
        <>
            <div className="py-[72px] sm:py-24 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] text-white relative overflow-clip">
                <div className='absolute bg-black h-[375px] w-[750px] sm:h-[768px] sm:w-[1536px] lg:h-[1200px] lg:w-[2400px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'></div>
                <div className="container relative">
                    <div className="flex items-center justify-center gap-2">
                        <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
                            <span className="text-transparent bg-[linear-gradient(to_right,#F87AFF,#FB93D0_25%,#FFDD99_50%,#C3F0B2_75%,#2FD8FE_100%)] bg-clip-text">Version 2.0 is here</span>
                            <span className='flex justify-center items-center'>
                                <span>Read More</span>
                                <ArrowWIcon />
                            </span>
                        </a>
                    </div>
                    <div className='flex justify-center'>
                        <div className="inline-flex relative">
                            <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8'>One Task <br />at a Time</h1>
                            <motion.div
                                className='absolute right-[476px] top-[108px] sm:inline hidden'
                                drag
                                dragSnapToOrigin
                            >
                                <Image src={cursor} alt="" className='max-w-none' width={200} height={200} draggable={false} />
                            </motion.div>
                            <motion.div
                                className='absolute left-[498px] top-[56px] sm:inline hidden'
                                drag
                                dragSnapToOrigin

                            >
                                <Image src={message} alt="" className='max-w-none' width={200} height={200} draggable={false} />
                            </motion.div>
                        </div>

                    </div>
                    <div className='flex justify-center'>
                        <p className='text-center text-xl mt-8 max-w-md'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
                    </div>
                    <div className='flex justify-center mt-8'>
                        <button className='bg-white text-black  rounded-lg px-5 py-3 font-medium'>Get For Free</button>
                    </div>


                </div>
            </div>
        </>
    )
}