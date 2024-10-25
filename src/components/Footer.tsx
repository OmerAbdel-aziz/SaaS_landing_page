import InstagramIcon from '../assets/icons/insta.svg';
import TwitterIcon from '../assets/icons/x-social.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import TickTokIcon from '../assets/icons/tiktok.svg';

const socialLinks = [
    { icon: InstagramIcon, url: 'https://www.instagram.com', name: 'Instagram' },
    { icon: TwitterIcon, url: 'https://www.x.com', name: 'Twitter' },
    { icon: LinkedInIcon, url: 'https://www.linkedin.com', name: 'LinkedIn' },
    { icon: TickTokIcon, url: 'https://www.tiktok.com', name: 'TikTok' },
]

export const Footer = () => {
    return (
        <div className="bg-black text-white py-8">
            <div className="container">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-white/60 text-center sm:text-left">© 2024 Your Company, Inc. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">
                                    <Icon width={24} height={24} aria-label={link.name} className="hover:opacity-80 transition-opacity opacity-50" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
