import React from 'react';
import Banner from './Banner';
import RecentBlogSection from './RecentBlogSection';
import NewsLetter from './NewsLetter';
import Faq from './Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogSection></RecentBlogSection>
            <h1 className='text-center text-[2rem] font-lex font-bold mt-[3em] mb-[1.5em]'>Our Popularity</h1>
            <div className="flex shadow w-full popu mb-[3em]">

                <div className="stat text-center flex justify-center items-center gap-[2em]">
                    
                    <div>
                        <div className="stat-title text-[1.5rem] font-lex font-medium">Blog Views</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc text-[1rem] mt-[.5em]">Feb 1st - Mar 1st</div>
                    </div>
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-11 h-11 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                </div>

                <div className="stat text-center flex justify-center items-center gap-[2em]">
                    
                    <div>
                        <div className="stat-title text-[1.5rem] font-lex font-medium">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc text-[1rem] mt-[.5em]">↗︎ 400 (22%)</div>
                    </div>
                    <div className="text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-11 h-11 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                </div>

                <div className="stat text-center flex justify-center items-center gap-[2em]">
                    
                    <div>
                        <div className="stat-title text-[1.5rem] font-lex font-medium">New Registers</div>
                        <div className="stat-value ">1,200</div>
                        <div className="stat-desc text-[1rem] mt-[.5em]">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-11 h-11 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                </div>

            </div>
            <NewsLetter></NewsLetter>
            <Faq></Faq>
        </div>
    );
};

export default Home;