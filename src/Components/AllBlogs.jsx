import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AllBlogs = () => {

    let [category,setCategory]=useState()
    let [search,setSearch]=useState()
    let [aBlogs,setABlogs]=useState()


    let {isPending:pendin,data:allBlogs}=useQuery({
        queryKey:['allBlogs'],
        queryFn:async ()=>{
            const res=await fetch(`http://localhost:5000/allblogs`);
            const retData2=await res.json()
            console.log( retData2);
            setABlogs(retData2)
            return retData2;
            
        }
    })


    const {isPending,isError,error,data:blogs}=useQuery({
        queryKey:['blogs',category],
        enabled:!!category,
        queryFn:async ()=>{
            const res=await fetch(`http://localhost:5000/allblogs/${category}`);
            const retData=await res.json()
            console.log( retData);
            return retData;
            
        }
    })

    const handleCategory=(e)=>{
        
        const cate=e.target.value
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

    

    const {data:bl}=useQuery({
        queryKey:['blogs',search],
        enabled:!!search,
        queryFn:async ()=>{
            const res=await fetch(`http://localhost:5000/allblog/${search}`);
            const retData3=await res.json()
            console.log( retData3);
            return retData3;
            
        }
    })

    const handleSearch=(e)=>{
        e.preventDefault();
        const text=e.target.search.value
        console.log(text);
        setSearch(text)
        setCategory('')
        setABlogs('')
    }

    console.log();


    return (
        <div>
            <div>
                
                
                <p>All blogs :{aBlogs?.length}</p>
                <p>category blog :{blogs?.length}</p>
                <p>search blog :{bl?.length}</p>
                
                
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
        </div>
    );
};

export default AllBlogs;