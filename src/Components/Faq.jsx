import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className='pt-[1em] pb-[5em]'>
            <h1 className='text-center font-lex text-[2rem] font-bold my-[1em] font-lex'>FAQ</h1>
           <div className='w-[60%] mx-auto'>
           <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title text-[1.5rem] font-semibold text-center ">
                How do I start blogging on BloggyWorld?
                </div>
                <div className="collapse-content text-center text-[1.3rem] font-medium">
                    <p>To start blogging on BloggyWorld, simply sign up for an account, create your profile, and start writing your first post. It's that easy!</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1"/>
                <div className="collapse-title text-[1.5rem] font-semibold text-center ">
                Can I update the of my blog?
                </div>
                <div className="collapse-content text-center text-[1.3rem] font-medium">
                    <p>Absolutely! You can.</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-[1.5rem] font-semibold text-center ">
                Do you feature local artisans?
                </div>
                <div className="collapse-content text-center text-[1.3rem] font-medium">
                    <p>Yes, we support global artisans.</p>
                </div>
            </div>

           </div>
        </div>
        </div>
    );
};

export default Faq;