import React from 'react'
import { contactImg } from '../../assets';
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
    return (
        <div className='w-full  lg:w-[35%]  bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-8 rounded-lg  shadow-shadowOne  flex flex-col gap-16  justify-center'>
            <img className='rounded-lg' src={contactImg} alt="" />
            <div className='flex flex-col gap-4'>
                <h3 className='font-bold text-white text-3xl'>Rajesh Deora</h3>
                <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
                <div className='flex gap-2'>
                    <p className='text-base text-gray-400 tracking-wide'>Phone:</p>
                    <p className='text-base text-gray-400 tracking-wide'>+918290821476</p>
                </div>
                <div className='flex gap-2'>
                    <p className='text-base text-gray-400 tracking-wide'>Email:</p>
                    <p className='text-base text-gray-400 tracking-wide'>rajdeoranitw@gmail.com</p>

                </div>

            </div>
            <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>FIND ME IN</h2>
                <div className='flex gap-4'>
                    <a href='https://www.facebook.com/raj.deora.5243/' target='_blank' className='bannerIcon '>
                        <RiFacebookFill />
                    </a>
                    <a href='https://www.instagram.com/raj_deora_rd/?hl=en' target='_blank' className='bannerIcon '>
                        <FaInstagram />
                    </a>
                    <a href='https://www.linkedin.com/in/rajesh-deora-54a017159/' target='_blank' className='bannerIcon '>
                        <FaLinkedinIn />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default ContactLeft