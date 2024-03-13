import React from 'react'
import { useState } from 'react';
import {
    c,
    cpp,
    html,
    css,
    js,
    react,
    redux,
    linux,
    postman,
    git,
    node,
    express,
    mongodb,
    vercel,
    sql,

} from "../../assets/index";
import SkillCard from './SkillCard';



const allData = [
    {
        image: c,
        name: "C"
    },
    {
        image: cpp,
        name: "CPP"
    },
    {
        image: html,
        name: "HTML5"
    },
    {
        image: css,
        name: "CSS3"
    },
    {
        image: js,
        name: "JavaScript"
    },
    {
        image: node,
        name: "Node Js"
    },
    {
        image: express,
        name: "Express Js"
    },
    {
        image: mongodb,
        name: "Mongo DB"
    },
    {
        image: postman,
        name: "Postman"
    },
    {
        image: react,
        name: "React"
    },
    {
        image: redux,
        name: "Redux"
    },
    {
        image: git,
        name: "Git & GitHub"
    },

    {
        image: vercel,
        name: "Vercel"
    },

    {
        image: sql,
        name: "MySQL"
    },

    {
        image: linux,
        name: "Linux"
    },

];

const languagesData = [
    {
        image: c,
        name: "C"
    },
    {
        image: cpp,
        name: "CPP"
    },
    {
        image: html,
        name: "HTML5"
    },
    {
        image: css,
        name: "CSS3"
    },
    {
        image: js,
        name: "JavaScript"
    },
    {
        image: sql,
        name: "MySQL"
    },


];

const frontendData = [
    {
        image: html,
        name: "HTML5"
    },
    {
        image: css,
        name: "CSS3"
    },
    {
        image: js,
        name: "JavaScript"
    },
    {
        image: react,
        name: "React"
    },
    {
        image: redux,
        name: "Redux"
    },
];

const backendData = [
    {
        image: node,
        name: "Node Js"
    },
    {
        image: express,
        name: "Express Js"
    },
    {
        image: mongodb,
        name: "Mongo DB"
    },
    {
        image: postman,
        name: "Postman"
    },
];


const Skills = () => {

    const [all, setAll] = useState(true);
    const [language, setLanguage] = useState(false);
    const [front, setFront] = useState(false);
    const [back, setBack] = useState(false);


    return (
        <section id='skills' className=' w-full py-20   border-b-[1px] border-b-black'>
            <div>
                <h1 className='text-5xl text-gray-300 font-bold capitalize flex items-center justify-center  '>My Skills</h1>
            </div >
            <div className='flex flex-col gap-10 mt-10'>
                <div>
                    <ul className='w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <li className={`${all ? "border-designColor rounded-lg " : "border-transparent"} skillLi`} onClick={() => {
                            setAll(true);
                            setLanguage(false);
                            setFront(false);
                            setBack(false);
                        }} >All</li>
                        <li className={`${language ? "border-designColor rounded-lg " : "border-transparent"} skillLi`} onClick={() => {
                            setAll(false);
                            setLanguage(true);
                            setFront(false);
                            setBack(false);

                        }}>Languages</li>
                        <li className={`${front ? "border-designColor rounded-lg " : "border-transparent"} skillLi`} onClick={() => {
                            setAll(false);
                            setLanguage(false);
                            setFront(true);
                            setBack(false);
                        }}>Frontend</li>
                        <li className={`${back ? "border-designColor rounded-lg " : "border-transparent"} skillLi`} onClick={() => {
                            setAll(false);
                            setLanguage(false);
                            setFront(false);
                            setBack(true);
                        }}>Backend</li>
                    </ul>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>
                    {all && allData.map((item, index) => (
                        <SkillCard key={index} image={item.image} name={item.name} />
                    ))}
                    {language && languagesData.map((item, index) => (
                        <SkillCard key={index} image={item.image} name={item.name} />
                    ))}
                    {front && frontendData.map((item, index) => (
                        <SkillCard key={index} image={item.image} name={item.name} />
                    ))}
                    {back && backendData.map((item, index) => (
                        <SkillCard key={index} image={item.image} name={item.name} />
                    ))}

                </div>
            </div>
        </section >
    )
}

export default Skills;
