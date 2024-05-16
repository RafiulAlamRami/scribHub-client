import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
// import { Helmet } from 'react-helmet-async';


const Register = () => {

    const navigate=useNavigate()

    
    const {createUser,updateUserProfile}=useContext(AuthContext)

    const [showPass,setShowPass]=useState(false)

   

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const handleForm=(data)=>{
        const name=data.name
        const photoUrl=data.photoURL
        const email=data.email
        const pass=data.password


        createUser(email,pass)
        .then(result=>{
            // console.log(result.user);
            updateUserProfile(name,photoUrl)
            .then(()=>{
                toast.success("Register Successfull.")
                navigate('/')
            })
            // toast.success("Register Successfull.")
        })
        .catch(error=>{
            toast.error("Something Wrong !")
        })
      }

    return (
        <div className=''>
             {/* <Helmet>
                <title>Royal Estate | Register</title>
            </Helmet> */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">

                    <h1>Register Now !</h1>
                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(handleForm)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name')} placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text" {...register('photoURL')} placeholder="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email')} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass?"text":"password"} placeholder="password" className="input input-bordered" required 
                                {...register("password", {
                                    minLength: {
                                      value: 6,
                                      message: 'Password length must be 6 '
                                    },
                                    pattern:{
                                        value:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/,
                                        message:'Must be include at least 1 Uppercase, 1 lowercase, 1 special carechter and 1 numeric character'
                                    }
                                  })}
                                />
                                <span className='absolute left-[70%] bottom-[32%]' onClick={()=>setShowPass(!showPass)}>{showPass?<IoIosEye />:<IoIosEyeOff></IoIosEyeOff>}</span>
                                <div>
                                    {errors.password && <p>{errors.password.message}</p> }
                                </div>
                            
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <Link to='/login' > Have a account ? <span className="underline">Login</span></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;