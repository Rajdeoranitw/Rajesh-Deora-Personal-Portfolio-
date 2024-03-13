import React from 'react'
import { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

const LeftBanner = () => {

    const [article, setArticle] = useState("a");
    const [text] = useTypewriter({
        words: ["NIT Warangal grad.", "IIT Guwahati post-grad.", "Full Stack Developer.", "Coder by interest."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    useEffect(() => {

        if (text == "IIT Guwahati post-grad.") {
            setArticle("an");
        }
        else {
            setArticle("a");
        }

    }, [text]);



    return (
        <div className=' w-full lgl:w-1/2 flex flex-col gap-10 '>
            <div className='flex flex-col gap-5'>
                <h1 className='text-6xl font-bold'>Hi, I'm{" "}
                    <span className="text-designColor capitalize">Rajesh</span>
                </h1>
                <h1 className='text-6xl font-bold text-designColor capitalize'>Deora
                </h1>
                <h2 className='text-4xl font-bold text-white'>{article} <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor='#ff014f'
                    />
                </h2>
                <p>I am self-motivated and a team player, looking for a competitive position in the ﬁeld of Software Development, where I can utilise my analytical and development skills to further work towards personal and professional development and contribute to the overall growth of the organisation.</p>
            </div>

            <div className='flex flex-col xl:flex-row  gap-6 lgl:gap-0 justify-between'>
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

export default LeftBanner