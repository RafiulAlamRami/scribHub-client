import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const BlogDetails = ({ params }) => {

    const { id } = useParams()
    console.log(typeof id);
    const { user } = useContext(AuthContext)
    const [comments,setComments]=useState()

    console.log(typeof id);



    const { isPending, isError, error, data: blog } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`https://scrib-hub-server.vercel.app/blogDetails/${id}`);
            const retData = await res.json()
            console.log(retData);
            return retData;
        }
    })

    // const {mutate}=useMutation({
    //     mutationFn:(data)=>{
    //         return axios.post('https://scrib-hub-server.vercel.app/addcomment',data,{withCredentials:true})
    //     }
    // })


    const handleComment = (e) => {
        e.preventDefault();
        const text = e.target.comment.value
        console.log(text);
        const name = user.displayName
        const photo = user.photoURL

        const userAndCom = { comment:text, name, photo,id }
        // setUserData(userAndCom);

        fetch(`https://scrib-hub-server.vercel.app/addcomment`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(userAndCom)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        // mutate(userAndCom)

    }

    useEffect(() => {
        fetch(`https://scrib-hub-server.vercel.app/getcomment/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setComments(data)
            })


    }, [id])

    if (isPending) {
        return <p className='text-[2rem]'>loading......</p>
    }
    if (isError) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            {blog.date} <br />
            {user.email} <br />
            {blog.email} <br />
            {comments?.length}
            <div>
                <div className="max-w-[100%] overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img className="object-cover w-full h-[70vh]" src={blog.photo} alt="" />

                    <div className="p-6">
                        <div>
                            <span className="text-xl font-medium text-blue-600 uppercase dark:text-blue-400">{blog.category}</span>
                            <p className="block mt-2 text-[2rem] font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{blog.title}</p>
                            <p className="mt-2 text-[1.5rem] text-gray-600 dark:text-gray-400">{blog.shortDes}</p>
                            <p className="mt-2 text-[1.7rem] text-gray-600 dark:text-gray-400">{blog.longDes}</p>
                        </div>

                        <div>
                            {user.email === blog.email && 
                            <Link to={`/updateblog/${id}`}><button className='btn my-[1em] text-[1.3rem] font-bold'>Update your Blog</button></Link>
                            }
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</a>
                                </div>
                                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleComment}>
                        <input type="text" name="comment" placeholder={user.email === blog.email ? "You can't comment here" : "Comment here"} disabled={user.email === blog.email} className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit Comment" className='btn' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;