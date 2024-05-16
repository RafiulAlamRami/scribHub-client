import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Wishlist = () => {

    const { user } = useContext(AuthContext)
    // const [wishs,setWishs]=useState()

    const {isPending,isError,error,data}=useQuery({
        queryKey:['wish',user.email],
        enabled:!!user.email,
        queryFn:async ()=>{
            const res=await fetch(`http://localhost:5000/getwish/${user.email}`);
            const retData=await res.json()
            console.log(retData);
            // setWishs(retData)
            return retData;
            
        }
    })

    return (
        <div>
           <p>wishlist :{data?.length}</p>
        </div>
    );
};

export default Wishlist;