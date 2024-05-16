import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = ({params}) => {

    const {id}=useParams()

    console.log(typeof id);

    const {isPending,isError,error,data:blog}=useQuery({
        queryKey:['blogs'],
        queryFn:async()=>{
            const res=await fetch(`https://scrib-hub-server.vercel.app/blogDetails/${id}`);
            const retData=await res.json()
            console.log( retData);
            return retData;
        }
    })

    if(isPending){
        return <p>loading......</p>
    }
    if(isError){
        return <p>{error.message}</p>
    }

    return (
        <div>
            bbbbbbbbbbbbbbbb {blog.date}
        </div>
    );
};

export default BlogDetails;