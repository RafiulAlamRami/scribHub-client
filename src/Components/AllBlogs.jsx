import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const AllBlogs = () => {

    const { user } = useContext(AuthContext)
    let [category, setCategory] = useState()
    let [search, setSearch] = useState()
    let [aBlogs, setABlogs] = useState()


    let { isPending: pendin, data: allBlogs } = useQuery({
        queryKey: ['allBlogs'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allblogs`);
            const retData2 = await res.json()
            console.log(retData2);
            setABlogs(retData2)
            return retData2;

        }
    })



    const { mutate } = useMutation({
        mutationFn: (data) => {
            return axios.post('http://localhost:5000/addwish', data, { withCredentials: true })
        }
    })

    const handleWish = (id, title, shortDes, longDes, category, photo, email, year, month, date, hour, minute) => {

        const userData = { id, title, shortDes, longDes, category, photo, email, year, month, date, hour, minute }

        mutate(userData)

    }


    const { isPending, isError, error, data: blogs } = useQuery({
        queryKey: ['blogs', category],
        enabled: !!category,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allblogs/${category}`);
            const retData = await res.json()
            console.log(retData);
            return retData;

        }
    })

    const handleCategory = (e) => {

        const cate = e.target.value
        console.log(cate);
        setCategory(cate)
        setSearch('')
        setABlogs('')
    }

    // const {isPending,isError,error,data}=useQuery({
    //     queryKey:['blogs',category,filter],
    //     enabled:!!category  && !!filter,
    //     queryFn:async ()=>{
    //         const res=await fetch(`http://localhost:5000/allblogs/${category}`);
    //         const retData=await res.json()
    //         console.log( retData);
    //         return retData;

    //     }
    // })



    // useEffect(()=>{
    //     fetch(`http://localhost:5000/allblogs/${c}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //     })


    // },[c])



    const { data: bl } = useQuery({
        queryKey: ['blogs', search],
        enabled: !!search,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allblog/${search}`);
            const retData3 = await res.json()
            console.log(retData3);
            return retData3;

        }
    })

    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.search.value
        console.log(text);
        setSearch(text)
        setCategory('')
        setABlogs('')
    }

    console.log();


    return (
        <div>
            <div>


                {/* <p>All blogs :{aBlogs?.length}</p>
                <p>category blog :{blogs?.length}</p>
                <p>search blog :{bl?.length}</p> */}


                <h1 className='text-[2rem] font-bold my-[2em] text-center'><span className='border-b-2 shadow-md'>Our all Blogs</span></h1>
                <div className='border my-[5rem] flex justify-center items-center gap-[8em] w-[80%] mx-auto'>
                    <div className='w-[50%]'>
                        <div className='w-[100%]' >
                            <select onChange={handleCategory} name='category' required className="select select-bordered w-full">
                                <option disabled selected >Select blogs Category</option>
                                <option value={'Photography'}>Photography</option>
                                <option value={'Health'}>Health</option>
                                <option value={'Travel'}>Travel</option>
                                <option value={'Food-Cooking'}>Food & Cooking</option>
                                <option value={'Fashion'}>Fashion</option>

                            </select>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <form onSubmit={handleSearch}>
                            <div className='flex gap-3'>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name='search' className="grow" placeholder="Search by blog title" />

                                </label>
                                <input type="submit" value="search" className='btn' />
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            {/* card */}
            <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-[.5em]'>
                {aBlogs && aBlogs?.map(blog =>
                    <>

                        <div className="max-w-lg p-[1.5em] shadow-md dark:bg-gray-50 dark:text-gray-800 border rounded-xl">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <img src={blog.photo} alt="" className="block object-cover object-center w-full rounded-xl h-72 dark:bg-gray-500" />

                                </div>
                                <div className="space-y-2">

                                    <h3 className="text-[1.7rem] font-lex font-semibold text-center">{blog.title}</h3>

                                    <div className='flex justify-around text-[1.1rem] font-semibold text-[#131313b2]'>
                                        <p><span className='font-lex font-extrabold text-[#1313137f]'>Category : </span> {blog.category}</p>
                                        {/* <p>Stock Status : {blog.shortDes}</p> */}
                                    </div>
                                    <div>
                                        <p className='text-[1.1rem] font-semibold text-[#131313b2]'>{blog.shortDes}</p>
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

                {blogs && blogs?.map(blog =>
                    <>

                        <div className="max-w-lg p-[1.5em] shadow-md dark:bg-gray-50 dark:text-gray-800 border rounded-xl">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <img src={blog.photo} alt="" className="block object-cover object-center w-full rounded-xl h-72 dark:bg-gray-500" />

                                </div>
                                <div className="space-y-2">

                                    <h3 className="text-[1.7rem] font-lex font-semibold text-center">{blog.title}</h3>

                                    <div className='flex justify-around text-[1.1rem] font-semibold text-[#131313b2]'>
                                        <p><span className='font-lex font-extrabold text-[#1313137f]'>Category : </span> {blog.category}</p>
                                        {/* <p>Stock Status : {blog.shortDes}</p> */}
                                    </div>
                                    <div>
                                        <p className='text-[1.1rem] font-semibold text-[#131313b2]'>{blog.shortDes}</p>
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

                {bl && bl?.map(blog =>
                    <>

                        <div className="max-w-lg p-[1.5em] shadow-md dark:bg-gray-50 dark:text-gray-800 border rounded-xl">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <img src={blog.photo} alt="" className="block object-cover object-center w-full rounded-xl h-72 dark:bg-gray-500" />

                                </div>
                                <div className="space-y-2">

                                    <h3 className="text-[1.7rem] font-lex font-semibold text-center">{blog.title}</h3>

                                    <div className='flex justify-around text-[1.1rem] font-semibold text-[#131313b2]'>
                                        <p><span className='font-lex font-extrabold text-[#1313137f]'>Category : </span> {blog.category}</p>
                                        {/* <p>Stock Status : {blog.shortDes}</p> */}
                                    </div>
                                    <div>
                                        <p className='text-[1.1rem] font-semibold text-[#131313b2]'>{blog.shortDes}</p>
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
    );
};

export default AllBlogs;