import React from 'react';
import { useState } from 'react';

const ContactRight = () => {


    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


    // email verification
    const emailValidation = (email) => {
        return String(email).toLocaleLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

    };

    const handelSend = (e) => {
        e.preventDefault();
        if (username === "") {
            setErrMessage("Username is required!")
        } else if (phoneNumber === "") {
            setErrMessage("Phone number is required!")
        } else if (email === "") {
            setErrMessage("Please provide Email!")
        } else if (!emailValidation(email)) {
            setErrMessage("Please give a valid Email!");
        }
        else if (subject === "") {
            setErrMessage("Please provide a subject!")
        } else if (message === "") {
            setErrMessage("Please provide a message!")
        } else {
            setSuccessMessage(`Thank you dear ${username}, Your Message sent Successfully!`);
            setErrMessage("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }





    }


    return (
        <div className='w-full  lg:w-[60%] h-full py-10   bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne'>
            <form className='w-full flex flex-col gap-6 ' >
                {
                    errMessage && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce '>{errMessage}</p>
                }
                {
                    successMessage && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce '>{successMessage}</p>
                }

                <div className='w-full flex gap-10'>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Your name</p>
                        <input onChange={(e) => setUsername(e.target.value)} value={username}
                            className={`${errMessage === "Username is required!" && "outline-designColor"} contactInput`} type="text" />
                    </div>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone number</p>
                        <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}
                            className={`${errMessage === "Phone number is required!" && "outline-designColor"} contactInput`} type="text" />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email}
                        className={`${(errMessage === "Please provide Email!") && "outline-designColor"} contactInput`} type="email" />
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
                    <input onChange={(e) => setSubject(e.target.value)} value={subject}
                        className={`${errMessage === "Please provide a subject!" && "outline-designColor"} contactInput`} type="text" />
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Your message</p>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message}
                        className={`${errMessage === "Please provide a message!" && "outline-designColor"} contactTextArea`} cols="30" rows="8"></textarea>
                </div>
                <div className='mt-7'>
                    <button onClick={handelSend} className='w-full h-12 rounded-lg  bg-[#141518] text-base text-gray-400 tracking-wider uppercase   hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'>Send Message</button>
                </div>
                {
                    errMessage && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce '>{errMessage}</p>
                }
                {
                    successMessage && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce '>{successMessage}</p>
                }
            </form>

        </div>
    )
}

export default ContactRight