import React from 'react'

const SkillCard = ({ image, name }) => {
    return (
        <div className=' py-5  w-full  h-auto  rounded-lg shadow-shadowOne flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000  '>

            <div className='   w-40 h-40 overflow-hidden rounded-lg'>
                <img className='w-40 h-40 object-cover group-hover:scale-110 duration-300 cursor-pointer' src={image} alt="project-image" />
            </div>
            <p className='text-sm font-bold text-designColor tracking-wide mt-3 '>{name}</p>
        </div>
    )
}

export default SkillCard;
