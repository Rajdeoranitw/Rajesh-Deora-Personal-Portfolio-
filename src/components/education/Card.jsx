import React from 'react'
import { HiArrowRight } from "react-icons/hi"

const Card = ({ name, text1, text2, cgpa, image, date }) => {
    let link = "";
    switch (name) {
        case "IIT Guwahati": link = "https://www.iitg.ac.in/";
            break;
        case "NIT Warangal": link = "https://nitw.ac.in/";
            break;
        default:
            break;
    }
    return (
        <div className='w-72  px-12 h-96 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'>

            <div className=' overflow-hidden'>
                <div className='flex flex-col items-start gap-4 translate-y-14 group-hover:translate-y-0 transition-transform duration-500'>
                    <div className='  flex items-center justify-start w-32 h-32 '>
                        <span><img className='w-full ' src={image} alt="" /></span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl  md:text-2xl font-titleFont font-bold '>{name}</h1>
                        <h3 >{text1}</h3>
                        {text2 !== "" && <h3 >{text2}</h3>}
                        <h4>{cgpa}</h4>
                        <span>{date}</span>
                        {name !== "Bhadvasia High School" && (<a href={link}><span className='text-2xl text-designColor'><HiArrowRight /></span></a>)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card