import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';


const Home = () => {


    return (
        <section id='home' className='w-full h-[800px]  pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row  border-b-[1px] border-b-black font-titleFont'>

            <LeftBanner />
            <RightBanner />
        </section>
    )
}

export default Home