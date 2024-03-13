import React from 'react';
import { logo } from '../../assets';
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='py-10   border-b-[1px] border-b-black flex justify-center items-center'>

            <div className='flex flex-col gap-5 items-center justify-center'>
                <div>
                    <img src={logo} alt="logo" className='h-32 w-32' />
                </div>
                <div>
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

        </section>

    )
}

export default Footer