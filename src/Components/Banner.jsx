import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            {/* <div className="hero min-h-[75vh] rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/qn2qT4n/blogHero.jpg)' }}>
                <div className="hero-overlay bg-opacity-20 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}
            <div className=" container flex flex-col px-6 my-[3em] mx-auto space-y-6 lg:h-[32rem]    md:flex-row md:items-center md:gap-6 lg:flex-row lg:items-center lg:gap-6">
                <div className="  text-left md:h-[32rem] lg:h-[32rem] flex flex-col items-center w-full lg:flex-row lg:w-1/2 pl-[5em] ">
                    <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                        <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
                        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                    </div>

                    <div className="max-w-lg lg:mx-12 lg:order-2 md:mt-[6em]">
                        <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-[3rem] leading-[1.2em] text-left">Read,Grow,Succeed Your journey starts here.</h1>
                        <p className="mt-[.9em] mb-[2em] text-gray-600 dark:text-gray-300 text-[1.3rem] font-normal">Embark on a transformative adventure of self-discovery and empowerment through our inspiring collection of reads. Fuel your mind, cultivate growth, and pave the path to success with every turn of the page. Begin your journey to greatness today.</p>
                        <div className="mt-6">
                            <a href="/allblogs" className="px-6 py-2.5 mt-6 text-xl font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">See Blogs</a>
                        </div>
                    </div>
                </div>

                <div className=" lg:-ml-[7rem] border-4 rounded-xl flex items-center justify-center w-[100%] h-[33rem] lg:w-1/2">
                    <img className="object-cover w-full h-full  rounded-md" src="https://i.ibb.co/d4QV1bb/blog-Hero3.jpg" alt="apple watch photo" />
                </div>
            </div>
        </div>
    );
};

export default Banner;