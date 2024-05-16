import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Wishlist = () => {

    const { user } = useContext(AuthContext)
    const [mywishs,setMywishs]=useState([])

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const rem = mywishs.filter(mywish => mywish._id !== id)
                        setMywishs(rem)
                        
                    }
                })


        });


    }

    useEffect(()=>{
            fetch(`http://localhost:5000/getwish/${user.email}`)
            .then(res=>res.json())
            .then(data=>{
                setMywishs(data);
            })
            
            
        },[user.email])
    console.log(mywishs);
    return (
        <div>
           <p>wishlist :{mywishs.length}</p>
          <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-[.5em]'>
          {mywishs && mywishs?.map(blog =>
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
                                    <p onClick={() => handleDelete(blog._id)} className="btn flex items-center justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md text-[1.2rem] font-lex ">Remove</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
          </div>
        </div>
    );
};

export default Wishlist;