import { useState } from "react"
import { skills } from "../data"

const Skills = () => {
    const [openCategories, setOpenCategories] = useState([]);

    const toggleCategory = (category) => {
        if (openCategories.includes(category)) {
            setOpenCategories(openCategories.filter((c) => c !== category));
        } else {
            setOpenCategories([...openCategories, category]);
        }
    };

    return (
        <div id="skills" className="w-full border-b-[0.5px] border-gray-600">
            <div className="flex justify-center m-6 text-4xl font-semibold text-center">
                Skills
            </div>
            <div className="flex flex-col md:flex-row md:justify-evenly">
                {skills.map((section, index) => (
                    <div key={index} className="mb-4 border-gray-600 md:w-120">
                        <button
                            onClick={() => toggleCategory(section.category)}
                            className="w-full py-2 px-4 font-semibold bg-[#0a192f] text-[#ccd6f6] hover:bg-[#112240] transition flex justify-between items-center"
                        >
                            <span>{section.category}</span>
                            <span className="text-xl">
                                {openCategories.includes(section.category) ? "–" : "+"}
                            </span>
                        </button>

                        {openCategories.includes(section.category) && (
                            <ul className="flex flex-wrap justify-evenly px-6 md:px-0 py-4 bg-[#112240] min-h-[40vh]">
                                {section.items.map((skill, i) => {
                                    const Icon = skill.icon;
                                    return (
                                    <li key={i} className="flex flex-col items-center justify-center w-24 h-24 m-2 border border-purple-400 rounded-lg  bg-[#0a192f] text-[#ccd6f6]">
                                        <Icon size={50} style={{ color: skill.color }}/>
                                        <span className="text-sm text-center">{skill.name}</span>
                                    </li>
                                    )
                                })}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills
