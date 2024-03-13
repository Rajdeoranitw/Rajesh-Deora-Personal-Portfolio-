import React, { useState } from 'react'
import Slider from "react-slick";
import { abdul } from '../../assets';
import { RiStarFill } from "react-icons/ri";
import { anjela } from '../../assets';
import { sir } from '../../assets';
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";





function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        ><HiArrowRight /></div>
    );
}

function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
        <div
        className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        ><HiArrowLeft /></div>
    );
}

const Courses = () => {

    const [dotActive, setDotActive] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "center",
                    marginTop: "20px"
                }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={
                    i === dotActive ? {
                        width: "12px",
                        height: "12px",
                        color: "blue",
                        background: "#ff014f",
                        borderRadius: "50%",
                        cursor: "pointer",

                    } : {
                        width: "12px",
                        height: "12px",
                        color: "blue",
                        background: "gray",
                        borderRadius: "50%",
                        cursor: "pointer",

                    }
                }
            >
            </div>
        )
    };

    return (
        <section id='courses' className=' w-full py-20   border-b-[1px] border-b-black'>
            <div>
                <h1 className='text-5xl text-gray-300 font-bold capitalize flex items-center justify-center  '>Courses And Certificates</h1>
            </div >

            <div className='max-w-6xl mx-auto mt-16'>
                <Slider {...settings}>
                    <div className='w-full '>
                        <div className='w-full   flex flex-col md:flex-row gap-5 justify-between'>
                            <div className='w-full md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-8 rounded-lg  shadow-shadowOne  flex flex-col gap-8  justify-center'>
                                <img className='h-72 rounded-lg object-cover' src={abdul} alt="" />
                                <div>
                                    <p className='text-xs uppercase text-designColor tracking-wide mb-2'>TUTOR</p>
                                    <h3 className='text-2xl font-bold'>Abdul Bari</h3>
                                    <p className='text-base tracking-wide text-gray-500'>Udemy</p>
                                </div>
                            </div>
                            <div className='w-full md:w-[60%] h-full  flex items-center justify-center'>
                                <div className='w-full h-[75%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col gap-5'>
                                    <div className='flex flex-col gap-5  py-3 border-b-2 border-b-gray-900'>
                                        <p className='text-2xl font-medium tracking-wide'>Mastering Data Structures & Algorithms using C and C++
                                        </p>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-base text-gray-400 '>January, 2022 - August, 2022</p>
                                            <div className='flex gap-1 text-yellow-500'>
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarFill />

                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-lg font-semibold text-gray-400'>Learnt various Popular Data Structures and their Algorithms. Developed Analytics skills on Data Structure and use them efficiently. Learnt Recursive Algorithms on Data Structures and various Sorting Algorithms. Also learnt implementation of Data Structures using C and C++</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full '>
                        <div className='w-full  flex flex-col md:flex-row justify-between'>
                            <div className='w-full md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-8 rounded-lg  shadow-shadowOne  flex flex-col gap-8  justify-center'>
                                <img className='h-72 rounded-lg object-cover' src={anjela} alt="" />
                                <div>
                                    <p className='text-xs uppercase text-designColor tracking-wide mb-2'>TUTOR</p>
                                    <h3 className='text-2xl font-bold'>Angela Yu</h3>
                                    <p className='text-base tracking-wide text-gray-500'>Udemy</p>
                                </div>
                            </div>
                            <div className='w-full md:w-[60%] h-full  flex items-center justify-center'>
                                <div className='w-full h-[75%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col gap-5'>
                                    <div className='flex flex-col gap-5  py-3 border-b-2 border-b-gray-900'>
                                        <p className='text-2xl font-medium tracking-wide'>The Complete 2023 Web Development Bootcamp.
                                        </p>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-base text-gray-400 '>April, 2022 - September, 2022</p>
                                            <div className='flex gap-1 text-yellow-500'>
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarFill />

                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-lg font-semibold text-gray-400'>Learnt the latest technologies, including javascript, React, Node and even Web3 development. Built fully-fledged websites web apps. Mastered frontend development with react. Mastered backend development ith Node, Express, MongoDB and postman. Also learnt professional developer best practices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full '>
                        <div className='w-full   flex flex-col md:flex-row justify-between'>
                            <div className=' w-full  md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-8 rounded-lg  shadow-shadowOne  flex flex-col gap-8  justify-center'>
                                <img className='h-72 rounded-lg object-cover' src={sir} alt="" />
                                <div>
                                    <p className='text-xs uppercase text-designColor tracking-wide mb-2'>TUTOR</p>
                                    <h3 className='text-2xl font-bold'>Sukhomoy Pal</h3>
                                    <p className='text-base tracking-wide text-gray-500'>IIT Guwahati</p>
                                </div>
                            </div>
                            <div className='w-full  md:w-[60%] h-full  flex items-center justify-center'>
                                <div className='w-full h-[75%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col gap-5'>
                                    <div className='flex flex-col gap-5  py-3 border-b-2 border-b-gray-900'>
                                        <p className='text-2xl font-medium tracking-wide'>Soft Computing
                                        </p>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-base text-gray-400 '>January, 2022 - April, 2022</p>
                                            <div className='flex gap-1 text-yellow-500'>
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarFill />
                                                <RiStarFill />

                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-lg font-semibold text-gray-400'>Learnt various Artificial Neural Network (ANN) models and learning techniques like supervised and unsupervised learning. Learnt about Genetic Algorithm and Fuzzy logic.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>

        </section >
    )
}

export default Courses;
