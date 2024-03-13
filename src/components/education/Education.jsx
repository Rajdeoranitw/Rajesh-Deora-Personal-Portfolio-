import React from 'react'
import Title from '../title/Title'
import Card from './Card';
import { iitg } from '../../assets/index';
import { nitw } from '../../assets/index';
import { school } from '../../assets/index';



const education_data = [
    {
        _id: 1,
        name: "IIT Guwahati",
        text1: "M Tech in Mechanical",
        text2: "Engineering",
        cgpa: "7.79",
        date: "07/21 - 07/2023",
        img: iitg,
    },
    {
        _id: 2,
        name: "NIT Warangal",
        text1: "B Tech in Mechanical",
        text2: "Engineering",
        cgpa: "7.77",
        date: "07/16 - 08/2020",
        img: nitw,
    },
    {
        _id: 3,
        name: "Bhadvasia High School",
        text1: "High School",
        text2: "",
        cgpa: "82.00%",
        date: "05/12 - 06/2014",
        img: school,
    },
    {
        _id: 4,
        name: "Bhadvasia High School",
        text1: "School",
        text2: "",
        cgpa: "68.67%",
        date: "06/2012",
        img: school,
    },

];

const Education = () => {

    return (
        <section id='education' className='w-full py-20   border-b-[1px] border-b-black'>
            <Title title={"My"} des={"Educational Background"} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 md:gap-20 px-20' >
                {education_data.map((item) => (
                    <Card key={item._id} name={item.name} text1={item.text1} text2={item.text2} cgpa={item.cgpa} date={item.date} image={item.img} />
                ))}
            </div>

        </section>
    )
}

export default Education