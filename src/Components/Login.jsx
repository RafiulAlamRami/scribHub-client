import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const Login = () => {

    const {signIn,googleLog,facebookLog}=useContext(AuthContext)

    const navigate=useNavigate()

    const [showPass,setShowPass]=useState(false)

    const [loginError,setLoginError]=useState()

    const handleGoogle=()=>{
        googleLog()
        .then(()=>{
            toast.success("Login Succussfully")
            
            navigate('/')
        })
        .catch(()=>{
            toast.error("Something Wrong")
            setLoginError("Something Wrong !!")
        })
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const handleForm=(data)=>{
        const email=data.email
        const pass=data.password

        // console.log(email,pass);

        signIn(email,pass)
        .then(result=>{
            console.log(result.user);
            toast.success("Login Succussfully")
            // data.target.reset()
            navigate('/')

            // jwt
                // const user={email}
                // axios.post('https://scrib-hub-server.vercel.app/jwt',user,{withCredentials:true})
                // .then(res=>{
                //     console.log(res.data);
                //     if(res.data.success){
                //         navigate('/')
                //     }
                // })
            // 
        })
        .catch(error=>{
            // console.log(error.message);
            toast.error("Invalid Email or Passord")
            setLoginError("Invalid Email or Passord !!")
        })

       
      }

    return (
        <div>
            <div className='w-100%'>
            <div className='w-50% flex justify-center'>
                <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                    {/* <p className="text-sm text-center dark:text-gray-600">Dont have account?
                        
                        <Link to='/register' className="underline">Register here</Link>
                    </p> */}
                    <div className="my-6 space-y-4">
                        <button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p className='text-[1.2rem] font-lex font-semibold'>Login with Google</p>
                        </button>
                        
                        {/* <button onClick={handleFb} aria-label="Login with Twitter" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                            <FaFacebook className='w-6 h-6' />
                            
                            <p className='text-[1.2rem] font-lex font-semibold'>Login with Facebook</p>
                        </button> */}
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-600" />
                        <p className="px-3 dark:text-gray-600 text-[1.2rem] font-lex font-semibold">OR</p>
                        <hr className="w-full dark:text-gray-600" />
                    </div>
                    <form className="card-body" onSubmit={handleSubmit(handleForm)}>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name')} placeholder="Name" className="input input-bordered" required />
                            </div> */}
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text" {...register('photoURL')} placeholder="photoURL" className="input input-bordered" required />
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[1.2rem] font-lex font-semibold">Email</span>
                                </label>
                                <input type="email" {...register('email')} placeholder="Email" className="input input-bordered text-[1.2rem] font-fira font-normal" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[1.2rem] font-lex font-semibold">Password</span>
                                </label>
                                <input type={showPass?"text":"password"} placeholder="Password" className="input input-bordered text-[1.2rem] font-fira font-normal" required 
                                {...register("password")}
                                />
                                {/* <span className='absolute right-[5rem] bottom-[12rem]' onClick={()=>setShowPass(!showPass)}>{showPass?<IoIosEye />:<IoIosEyeOff></IoIosEyeOff>}</span> */}
                                <div>
                                    {errors.password && <p className='text-[1.1rem] font-fira font-normal'>{errors.password.message}</p> }
                                </div>
                            
                            </div>
                            {
                                <p className=' mt-5 text-[1.5rem] fon-fira font-semibold text-red-600'>{loginError}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-[1.3rem] font-lex font-bold ">Login</button>
                            </div>
                            <p className='text-[1.1rem] font-fira font-normal my-[.8em]'>Dont have account? <Link to='/register'><span className="underline">Rgister here</span></Link> </p>
                        </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;