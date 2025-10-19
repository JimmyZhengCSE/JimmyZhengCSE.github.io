import { useEffect, useRef, useState } from 'react';
import { Link } from "react-scroll";
// import navbarTabs from "../data/navbartabs";
import { navbarTabs, socials } from '../data';
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const tabsRef = useRef([]);
    const [activeTabIndex, setActiveTabIndex] = useState(null);
    
    useEffect(() => {
        if (activeTabIndex === null) {
            return;
        }

        const setTabPosition = () => {
            const currentTab = tabsRef.current[activeTabIndex];
        }

        setTabPosition();
    }, [activeTabIndex]);

    return (
        <nav className="fixed bg-gray-400 w-full h-20 z-50">
            {/* Desktop View */}
            <div className='hidden md:flex justify-center h-full'>
                {navbarTabs.map((tab, index) => {
                    const isActive = activeTabIndex === index;
                    return (
                        <button
                            key={index}
                            ref={(el) => (tabsRef.current[index] = el)}
                            className={`${isActive ? "text-black" : "hover:text-black "} text-xl cursor-pointer py-2 my-auto px-4 hover:scale-110 duration-100`}
                        >
                            <Link 
                                onClick={() => setActiveTabIndex(index)} 
                                to={tab.id}
                                spy={true}
                                smooth={true}
                                offset={tab.offset}
                                duration={500}
                            >    
                                {tab.title}
                                {console.log(`${tab.id} ${tab.title}`)}
                            </Link>
                        </button>
                    )
                })
                }
            </div>

            {/* Links */}
            <div className="hidden md:flex flex-col top-[35%] left-0 fixed z-10">
                <ul>
                    {socials.map((social, index) => (
                    <li key={index} className="flex items-center justify-between w-[150px] ml-[-120px] hover:ml-[0px] hover:rounded-l-md duration-300">
                        <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex justify-between items-center pl-1 py-1 w-full ${social.background}`}
                            aria-label={`Link to ${social.name}`}
                        >
                            {social.name}
                            {social.icon}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
            
            {/* Mobile View */}
            <div onClick={handleClick} className='md:hidden z-50 cursor-pointer fixed top-4 right-5 p-4 text-white text-2xl'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!nav ? 'hidden' : 'md:hidden absolute top-0 left-0 w-full h-screen bg-[#222222] flex flex-col justify-center items-center'}>
                {navbarTabs.map((tab) => {
                    return <li key={tab.id} className="my-6 text-4xl cursor-pointer"><Link onClick={handleClick} to={tab.id} offset={tab.offset}> {tab.title} </Link></li>
                })
                }
            </ul>

        </nav>
    )
}

export default Navbar
