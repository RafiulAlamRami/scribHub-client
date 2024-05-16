import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home.jsx';
import Root from './Components/Root.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Login from './Components/Login.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Provider/AuthProvider.jsx';
import Register from './Components/Register.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import Wishlist from './Components/Wishlist.jsx';
import AllBlogs from './Components/AllBlogs.jsx';
import AddBlog from './Components/AddBlog.jsx';
import FeaturedBlogs from './Components/FeaturedBlogs.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import BlogDetails from './Components/BlogDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/allblogs',
        element:<AllBlogs></AllBlogs>
      },
      {
        path:'/addblog',
        element:<AddBlog></AddBlog>
      },
      {
        path:'/featuredblogs',
        element:<FeaturedBlogs></FeaturedBlogs>
      },
      {
        path:'/wishlist',
        element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      },
      {
        path:'/blogDetails/:id',
        element:<PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>
      }
    ]
  },
]); 

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ToastContainer />

    {/* <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider> */}

    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
    
  </React.StrictMode>,
)
