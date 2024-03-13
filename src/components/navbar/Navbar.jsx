import React from 'react'
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants/index";
import { Link } from 'react-scroll';
import { FiMenu } from "react-icons/fi"
import { useState } from 'react';
import { MdClose } from "react-icons/md"
import { RiFacebookFill } from "react-icons/ri"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"


function Navbar() {

    const [showMenu, setShowMenu] = useState(false);


    return (
        <div className='w-full h-24 mx-auto  sticky top-0 z-50 bg-bodyColor flex  justify-between items-center font-titleFont border-b-[1px] border-b-gray-600' >
            <div>
                <img src={logo} alt="logo" className='h-20 w-20' />
            </div>
            <div>
                <ul className=' hidden md:inline-flex   items-center gap-6 mdl:gap-10 '>
                    {
                        navLinksdata.map(({ _id, title, link }) => (
                            <li className='text-base font-bold text-gray-400 tracking-wide cursor-pointer  hover:text-designColor duration-300' key={_id}> <Link
                                activeClass='active'
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            > {title}</Link></li>
                        ))
                    }
                </ul>
                <span className='text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
                    <FiMenu />
                </span>
                {
                    showMenu && (
                        <div className='w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide'>
                            <div className='flex flex-col gap-8 justify-start py-4 px-4 relative'>
                                <div className='flex flex-col gap-3 text-designColor text-2xl font-bold'>
                                    <img src={logo} className='w-24' alt="" />
                                    <h1>Rajesh Deora</h1>
                                </div>
                                <ul className='flex flex-col gap-4'>
                                    {navLinksdata.map((item) => (
                                        <li  key={item._id} className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'>
                                            <Link
                                                activeClass='active'
                                                to={item.link}
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                                onClick={()=>setShowMenu(!showMenu)}
                                            >{item.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className='flex flex-col xl:flex-row  gap-6 lgl:gap-0 justify-between'>
                                    <h2 className='text-base uppercase font-titleFont mb-2 font-bold '>FIND ME IN</h2>
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

                                <span
                                    onClick={() => setShowMenu(false)}
                                    className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'
                                > <MdClose /> </span>
                            </div>


                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;
