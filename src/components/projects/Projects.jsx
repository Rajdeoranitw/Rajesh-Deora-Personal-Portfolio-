import React from 'react'
import Title from '../title/Title'
import ProjectsCard from './ProjectsCard';
import { pro1, pro2, pro3 } from '../../assets';


const projectData = [
    {
        _id: 1,
        image: pro1,
        title: "RESPONSIVE E-COMMERCE WEBSITE",
        tech: "MERN Stack",
        des: " Users can browse products, add review, add items to their cart, complete the checkout process and see their orders and also update proﬁle and passwords. Admin can control all the orders, users and also create, update and delete a product. Implemented a responsive UI using React, integrated Redux to manage application state. Used Node.js and MongoDB to create a RESTful API for backend functionality with all CRUD operations, used Cluodinary to store the uploaded photos. Implemented user authentication and authorization using JWT. Cookie, local, and session storage are used as and when required."
    },

    {
        _id: 2,
        image: pro3,
        title: "RESPONSIVE RESTAURANT WEBSITE",
        tech: "HTML, CSS, JavaScript, React.js",
        des: "This is responsive restaurant website using React and Styled Components. Scrollreveal and React-icon are used for animation and icons. There is a facility introduced to add items to cart."
    },
]


const Projects = () => {
    return (
        <section id='projects' className='py-20   border-b-[1px] border-b-black'>
            <div>
                <h1 className='text-5xl text-gray-300 font-bold capitalize flex items-center justify-center '>My Projects</h1>
            </div>

            <div className='grid  sm:grid-cols-1 md:grid-cols-2   gap-14 mt-14'>

                {projectData.map((item, index) => (
                    <ProjectsCard key={index} image={item.image} title={item.title} des={item.des} tech={item.tech} />

                ))}
            </div>
        </section>
    )
}

export default Projects;
