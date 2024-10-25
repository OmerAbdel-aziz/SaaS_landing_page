import Image from 'next/image';
import LogoImage from '../assets/images/logosaas.png';
import MenuIcon from '../assets/icons/menu.svg';


 
export const Navbar = () =>{
    return <>
    <div className="px-4 py-4 bg-black">
        <div className='flex justify-between '>
            <div className='relative'>
                <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md'></div>
            <Image src={LogoImage} alt='Saas Image' className='h-12 w-12 relative'/>
            </div>
            
            <div className='border border-white border-opacity-30 h-10 w-10 rounded inline-flex sm:hidden justify-center items-center'>
            <MenuIcon className = "text-white"/>
            </div>
            <nav className='hidden sm:flex justify-center items-center gap-6'>
                <a href="#" className='text-white text-opacity-30 hover:text-opacity-100 transition'>About</a>
                <a href="#" className='text-white text-opacity-30 hover:text-opacity-100 transition'>Features</a>
                <a href="#" className='text-white text-opacity-30 hover:text-opacity-100 transition'>Updates</a>
                <a href="#" className='text-white text-opacity-30 hover:text-opacity-100 transition'>Help</a>
                <a href="#" className='text-white text-opacity-30 hover:text-opacity-100 transition'>Customers</a>
                <button className='bg-white  rounded-lg px-4 py-2'>Get For Free</button>
            </nav>
            
        </div>
    </div>
    </>
}