import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const RecentBlogSection = () => {
    const { user } = useContext(AuthContext)

    const { mutate } = useMutation({
        mutationFn: (data) => {
            return axios.post('http://localhost:5000/addwish', data, { withCredentials: true })
        }
    })

    const handleWish = (id, title, shortDes, longDes, category, photo, email, year, month, date, hour, minute) => {

        const userData={id,title,shortDes,longDes,category,photo,email,year,month,date,hour,minute}

        mutate(userData)

    }

    // const [blogs,setBlogs]=useState([])

    // const {isPending,isError,error,data:{data:blogs}}=useQuery({
    const { isPending, isError, error, data: blogs=[] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://scrib-hub-server.vercel.app/recentblog');
            const retData = await res.json()
            console.log(retData);
            return retData;
        }
        // queryFn: () => axios.get("https://scrib-hub-server.vercel.app/recentblog")
    })

    // console.log(blogs.data);

    if (isPending) {
        return <p>loading......</p>
    }
    if (isError) {
        return <p>{error.message}</p>
    }

    return (
        <div className='my-[8rem]'>
            <div>
                <h1 className='text-[2.5rem] text-center font-bold font-lex my-[.7em]'><span>Our Recent Blogs</span></h1>
                <p className='text-[1.4rem] text-center font font-semibold font-lex mb-[3.5em] leading-[2.5rem]'>Our latest blog post offers expert insights and actionable tips to help you <br /> thrive in today's dynamic world. Dive in now!</p>
            </div>
            <div>
                <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-[.5em]'>
                    {
                       blogs && blogs.map(blog =>
                            <>

                                <div className="max-w-lg p-[1.5em] shadow-md dark:bg-gray-50 dark:text-gray-800 border rounded-xl">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <img src={blog.photo} alt="" className="block object-cover object-center w-full rounded-xl h-72 dark:bg-gray-500" />

                                        </div>
                                        <div className="space-y-2">

                                            <h3 className="text-[1.7rem] font-lex font-semibold text-center">{blog.title}</h3>

                                            <div className='flex justify-around text-[1.1rem] font-semibold text-[#131313b2]'>
                                                <p><span className='font-lex font-extrabold text-[#1313137f]'>SubCategory : </span> {blog.category}</p>
                                                <p>Stock Status : {blog.shortDes}</p>
                                            </div>
                                            <div>
                                                <p className='text-[1.1rem] font-semibold text-[#131313b2]'>{ }</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-5'>
                                            <Link to={`/blogDetails/${blog._id}`} className="btn flex items-center justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md text-[1.2rem] font-lex ">View  Details</Link>
                                            <p onClick={() => handleWish(blog._id, blog.title
                                                , blog.shortDes, blog.longDes, blog.category, blog.photo, blog.email, blog.year, blog.month, blog.date, blog.hour, blog.minute)} className="btn flex items-center justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md text-[1.2rem] font-lex ">Wishlist</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentBlogSection;