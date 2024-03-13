import React from 'react'
import Title from '../title/Title';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';


const Contact = () => {
    return (

        <section id='contact' className='py-20   border-b-[1px] border-b-black'>
            <div className='flex items-center justify-center'>
                <Title title={"contact"} des={"Contact Me"} />
            </div>
            <div className='w-full '>
                <div className='w-full h-auto  py-5 flex flex-col lg:flex-row justify-between gap-5'>
                    <ContactLeft />
                    <ContactRight />
                </div >
            </div >
        </section >
    )
}

export default Contact;   
