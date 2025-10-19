import { FaLink } from "react-icons/fa";

const Projects = () => {
    return (
        <div name="projects" className="projects-container m-10">
            <div className="text-4xl flex justify-center items-center">Projects</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {/* Project */}
                {/* <div className="project-card bg-white p-6 rounded-lg flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-2 text-black">Project 3</h3>
                    <p className="text-gray-400 font-bold mb-4">Description.</p>
                    <div className="tech-stack text-sm text-gray-400 mb-4 mt-auto">
                        <span className="mr-4">Tech 1</span>
                        <span className="mr-4">Tech 2</span>
                        <span>Tech 3</span>
                    </div>
                    <a href="https://project-link.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Project</a>
                </div> */}

                {/* Trivia Project */}
                <div className="project-card bg-white p-6 rounded-lg flex flex-col h-full">
                    <div className="mb-2">
                        <a
                            href="https://trivia-jz60.onrender.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-semibold text-black flex items-center hover:underline w-fit"
                        >
                            Trivia
                            <FaLink size={12} className="ml-2 mt-1"/>
                        </a>
                    </div>
                    <p className="text-gray-400 font-bold mb-4">Test your knowledge with this fun trivia app!</p>
                    <div className="tech-stack text-sm text-gray-400 mb-4 mt-auto">
                        <span className="mr-4">HTML/CSS</span>
                        <span className="mr-4">JavaScript</span>
                        <span className="mr-4">React</span>
                        <span className="mr-4">Websockets</span>
                    </div>
                </div>

                 {/* WalrusCoin Project */}
                <div className="project-card bg-white p-6 rounded-lg flex flex-col h-full">
                    <div className="mb-2">
                        <a
                            href="https://github.com/tahsina13/walrus-coin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-semibold text-black flex items-center hover:underline w-fit"
                        >
                            WalrusCoin
                            <FaLink size={12} className="ml-2 mt-1"/>
                        </a>
                    </div>
                    <p className="text-gray-400 font-bold mb-4">
                        decentralized file-sharing application built as an Electron desktop app, 
                        designed for secure, incentivized data transfer and cryptocurrency mining. 
                        Developed as a senior design project, it combines blockchain principles, 
                        peer-to-peer networking, and cryptocurrency to create a fully distributed 
                        ecosystem for file exchange and resource sharing.
                    </p>
                    <div className="tech-stack text-sm text-gray-400 mb-4 mt-auto">
                        <span className="mr-4">HTML/CSS</span>
                        <span className="mr-4">TypeScript</span>
                        <span className="mr-4">React</span>
                        <span className="mr-4">Electron</span>
                        <span className="mr-4">Go</span>
                    </div>
                </div>
                
                {/* GeoGuessr Project*/}
                <div className="project-card bg-white p-6 rounded-lg flex flex-col h-full">
                    <div className="mb-2">
                        <a
                            href="https://whereinsbu.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-semibold text-black flex items-center hover:underline w-fit"
                        >
                            Where in SBU?
                            <FaLink size={12} className="ml-2 mt-1"/>
                        </a>
                    </div>
                    <p className="text-gray-400 font-bold mb-4">
                        A browser-based game inspired by Geoguessr, where players explore 
                        <strong>Stony Brook University</strong> with Google Maps Street View. 
                        Players are challenged to guess their exact location on campus by 
                        placing a marker on an interactive map.
                    </p>
                    <div className="tech-stack text-sm text-gray-400 mb-4 mt-auto">
                        <span className="mr-4">Google Maps API</span>
                        <span className="mr-4">JavaScript</span>
                        <span className="mr-4">HTML/CSS</span>
                    </div>
                </div>

                {/* Custom Dynamic Memory Allocator Project */}
                <div className="project-card bg-white p-6 rounded-lg flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-2 text-black">Custom Dynamic Memory Allocator in C</h3>
                    <p className="text-gray-400 font-bold mb-4">
                        A low-level memory allocator replicating malloc, free, and realloc using sbrk() 
                        and manual heap management with block metadata, free list, and coalescing.
                    </p>
                    <div className="tech-stack text-sm text-gray-400 mb-4 mt-auto">
                        <span className="mr-4">C</span>
                    </div>
                </div>

                {/* Stack Overflow Clone */}
                <div className="project-card bg-white p-6 rounded-lg flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-2 text-black">Stack Overflow Clone</h3>
                    <p className="text-gray-400 font-bold mb-4">
                        Full-stack web application that replicates the core features of Stack Overflow, 
                        a popular Q&A platform for developers. This clone allows users to post 
                        programming-related questions, answer others' questions, vote, comment, and 
                        search content, mimicking the experience of the real platform.
                    </p>
                    <div className="tech-stack text-sm text-gray-400 mb-4 mt-auto">
                        <span className="mr-4">HTML/CSS</span>
                        <span className="mr-4">JavaScript</span>
                        <span className="mr-4">React</span>
                        <span className="mr-4">Node.js</span>
                        <span className="mr-4">Express.js</span>
                        <span className="mr-4">MongoDB</span>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Projects
