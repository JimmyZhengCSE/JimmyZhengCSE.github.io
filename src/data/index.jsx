import { FaGithub, FaGitAlt, FaLinkedin, FaReact, FaJava, FaPython } from 'react-icons/fa';
import { ImProfile } from "react-icons/im";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiJavascript, SiHtml5, SiCss3, SiC } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";


export const navbarTabs = [
    { id: "home", title: "Home", offset: 0,},
    { id: "about", title: "About", offset: -85,},
    { id: "skills", title: "Skills", offset: -85,},
    { id: "projects", title: "Projects", offset: -85,},
    { id: "contact", title: "Contact", offset: -85,},
];

export const skills = [
    {
        category: "Languages",
        items: [
            {name: "Python", icon: FaPython, color: "#3572A5"}, 
            {name: "Java", icon: FaJava, color: "#b07219"}, 
            {name: "C", icon: SiC, color: "#00599C"}, 
            {name: "JavaScript", icon: SiJavascript, color: "#f7df1e"}, 
            {name: "HTML", icon: SiHtml5, color: "#e34c26"},
            {name: "CSS", icon: SiCss3, color: "#1572B6"},
        ]
    },
    {
        category: "Technologies",
        items: [
            {name: "React", icon: FaReact, color: "#61DAFB"}, 
            {name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8"},
            {name: "Node.js", icon: DiNodejsSmall, color: "#68a063"}, 
            {name: "Express.js", icon: SiExpress, color: "white"}, 
            {name: "MongoDB", icon: SiMongodb, color: "#47A248"}, 
        ]
    },
    {
        category: "Tools",
        items: [
            {name: "Git", icon: FaGitAlt, color: "#f1502f"},
            {name: "Github", icon: FaGithub, color: "#ffffff"},
            {name: "Postman", icon: SiPostman, color: "#ff6c37"},
        ]
    },
];

export const education = [
    {
        school: "Example University",
        degree: "B.S. Computer Science",
        year: "2021 - 2025",
    },
];

export const socials = [
    {
        name: "Linkedin",
        link: 'https://www.linkedin.com/in/jimmy-zheng-cs',
        icon: <FaLinkedin size='30' style={{ color: 'white' }}/>,
        background: "bg-[#146bc0]",
    },
    {
        name: "Github",
        link: 'https://github.com/JimmyZhengCSE',
        icon: <FaGithub size='30' style={{ color: 'white' }}/>,
        background: "bg-[#333333]",
    },
    {
        name: "Resume",
        link: 'https://drive.google.com/file/d/19j3Q6iQSRM8F3lw_G83bgf7PZ2x7FdVn/view?usp=sharing',
        icon: <ImProfile size='30' style={{ color: 'white' }}/>,
        background: "bg-[#6fc2b0]",
    },
];
