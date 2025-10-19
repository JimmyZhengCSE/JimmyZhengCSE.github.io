import { socials } from "../data"

const Footer = () => {
    return (
        <footer className='flex flex-col h-32 bg-[#0d0d0d] text-[#ccd6f6] items-center'>
            <div className="flex flex-row gap-x-4 mb-auto h-full items-center">
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Link to ${social.name}`}
                        className="p-2 rounded-full hover:bg-gray-400 transition"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
            <div className="mt-auto text-sm">
                © {new Date().getFullYear()} Jimmy Zheng. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
