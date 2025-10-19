import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className="flex w-full h-screen justify-center flex-col">
            <div className='max-w-[1000px] mx-auto justify-center'>
                <div className="flex h-full justify-center">
                    <div className='px-2'>
                        <p className='text-xl text-pink-600 hover:scale-110 duration-500'>Hi, my name is</p>
                        <h1 className='typewriter text-4xl sm:text-7xl font-bold text-[#ccd6f6] hover:scale-110 duration-500'>Jimmy Zheng</h1>
                        <p className='text-xl mt-3 hover:scale-110 duration-500'> Welcome to my portfolio!</p>
                    </div>
                </div>
                <Link to="about" spy={true} smooth={true} offset={-85} duration={500}>
                    <div className='max-w-[1000px] mx-auto flex justify-center'>
                        <button className='w-10/12 hover:w-11/12 text-white group border-2 px-6 py-3 my-6 flex items-center justify-center hover:bg-pink-600 duration-700'>Learn more
                            <span className='group-hover:rotate-[90deg] group-hover:translate-y-[-5px] group-hover:translate-x-[5px] duration-700'><FaRegArrowAltCircleRight className='ml-3' size={30} /></span>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
