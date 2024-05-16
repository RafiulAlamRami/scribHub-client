import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const UpdateBlog = ({params}) => {
    const {id}=useParams()
    console.log(id);
    const {user}=useContext(AuthContext)
    const [upblogs,setUpblogs]=useState([])

    useEffect(() => {
        fetch(`https://scrib-hub-server.vercel.app/upblog/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpblogs(data)
            })


    }, [id])

    const {mutate,isPending}=useMutation({
        mutationFn:(data)=>{
            return axios.put(`https://scrib-hub-server.vercel.app/upblog/${id}`,data,{withCredentials:true})
        }
    })
    const HandleAddBlog=event=>{
        event.preventDefault()
        const form=event.target
        const title=form.title.value
        const shortDes=form.shortDes.value
        const longDes=form.longDes.value
        const category=form.category.value
        const photo=form.photo.value
        const email=user.email
        

        const today = new Date();

        const year = today. getFullYear();
        const month = today. getMonth()+1;
        const date = today. getDate();
        const hour = today. getHours();
        const minute = today. getMinutes();
        
        

        const addBlog={title,shortDes,longDes,category,photo,email,year,month,date,hour,minute}

        console.log(addBlog);


        // const {data:addBlog}=useQuery({
        //     queryKey:['blog'],
        //     queryFn: async()=>{
        //         const res=await fetch();
        //         return res.json();
        //     }
        // })

        

        mutate(addBlog)

        // fetch('https://scrib-hub-server.vercel.app/addblog',{
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(addBlog)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        //     toast.success("Added Succussfully")
        //     form.reset()
            
        // })
        
    }


    return (
        <div>
            <div className='mb-[4em]'> 
                <h1 className='text-[2rem] font-bold my-[2em] text-center'><span className='border-b-2 shadow-md'>Update Blog</span></h1>
                <div className='text-[1.3rem] w-[80%] mx-auto border p-5 rounded-xl'>

                    <form onSubmit={HandleAddBlog}>
                    
                        {/* first row */}
                        <div className='flex gap-10 justify-center '>

                            <div className='flex flex-col gap-2  w-full'>
                                <label htmlFor="" className='text-left'>Title</label>
                                <input type="text" defaultValue={upblogs.title} 
                                // defaultValue={user?.displayName} 
                                name='title' className="input input-bordered w-full " />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-left'>Short Description</label>
                                <input type="text" defaultValue={upblogs.shortDes}  
                                // defaultValue={user.email} 
                                name='shortDes' className="input input-bordered w-full " />
                            </div>
                            
                        </div>
                        {/* 2nd row */}
                        <div className='flex gap-10 justify-center my-7'>

                            <div className='flex flex-col gap-2  w-full'>
                                <label htmlFor="" className='text-left'>Long Description</label>
                                <input type="text" defaultValue={upblogs.longDes}  name='longDes' className="input input-bordered w-full " />
                            </div>
                            <div className='flex flex-col gap-2 w-full mt-[2em]'>
                                <select name='category' defaultValue={upblogs.category} required className="select select-bordered w-full">
                                    <option disabled selected >{upblogs.category} </option>
                                    <option value={'Photography'}>Photography</option>
                                    <option value={'Health'}>Health</option>
                                    <option value={'Travel'}>Travel</option>
                                    <option value={'Food-Cooking'}>Food & Cooking</option>
                                    <option value={'Fashion'}>Fashion</option>
                                   
                                </select>
                            </div>
                            
                        </div>
                        
                        {/* 3rd row */}
                        {/* <div className='flex gap-10 justify-center my-7'>

                            <div className='flex flex-col gap-2  w-full'>
                                <label htmlFor="" className='text-left'>Short  Description</label>
                                <input type="text" placeholder="Short  Sescription" name='shortDescription' className="input input-bordered w-full " />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-left'>Price</label>
                                <input type="text" placeholder="Price" name='price' className="input input-bordered w-full " />
                            </div>
                            
                        </div> */}
                        {/* 4th row */}
                        {/* <div className='flex gap-10 justify-center my-7'>

                            <div className='flex flex-col gap-2  w-full'>
                                <label htmlFor="" className='text-left'>Rating</label>
                                <input type="text" placeholder="Rating" name='rating' className="input input-bordered w-full " />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="" className='text-left'>Customization</label>
                                <select name='customization' required className="select select-bordered w-full">
                                    <option disabled selected >Customaization</option>
                                    <option value={'Yes'}>Yes</option>
                                    <option value={'No'}>No</option>
                                </select>
                            </div>
                            
                        </div> */}
                        {/* 5th row */}
                        {/* <div className='flex gap-10 justify-center '>

                            <div className='flex flex-col gap-2  w-full'>
                                <label htmlFor="" className='text-left'>Processing Time</label>
                                <input type="text" placeholder="Time" name='time' className="input input-bordered w-full " />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-left'>Stock Status</label>
                                <input type="text" placeholder="In Stock or Made to Order" name='stockStatus' className="input input-bordered w-full " />
                            </div>
                            
                        </div> */}

                        {/* 6th row */}
                        <div className='my-7'>

                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-left'>Photo URL</label>
                                <input type="text" defaultValue={upblogs.photo} placeholder="Photo URL" name='photo' className="input input-bordered w-full " />
                            </div>

                        </div>
                        {/* Submit Button */}
                        <div>
                            <input type="submit" value="Submit" className='font-lex text-[2rem] font-bold btn btn-block btn-neutral  text-white'/>
                        </div>
                    
                    </form>
                </div>
                
            </div>
        </div>
    );
};



export default UpdateBlog;