import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setSearch } from './Slices/SearchSlice';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Navbar =() => {
 
let location=useLocation()
let navigate=useNavigate()
let from=location.state?.from.pathname || '/' 
const{
  register,
  handleSubmit,
  formState:{errors}
}=useForm()
const onSubmit= async(data)=>{
  let userinfo={
    email:data.email,
    username:data.username,
    password:data.password,
  }
  await axios.post('http://localhost:4002/user/signup',userinfo).then((res)=>{
    console.log(res.data);
    if(res.data){
      toast.success('Signup Success')
      navigate(from,{replace:true})
    }
    localStorage.setItem('users',JSON.stringify(res.data.user))
  }).catch((err)=>{
    if(err.response){
      toast.error("Error "+err.response.data.message)
      
    }
  })
}



const dispatch=useDispatch();
const users=JSON.parse(localStorage.getItem('UsersLogedIn'))
let [authenticate,setAunthenticate]=useState(users?true:false)
console.log(authenticate);

    return (
        <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3'>
<div>
<h3 className='text-xl text-gray-800 font-bold '>{new Date().toUTCString().slice(0,16)}</h3>
<h1 className='text-2xl font-bold'>Foods Resto</h1>
</div>
<div className='space-x-1'>
    <input type='search' name='search' placeholder='search here' autoComplete='off' onChange={(e)=>dispatch(setSearch(e.target.value))}
    className='p-3 border border-gray-800 outline-none rounded-lg text-sm w-full lg:w-[25vw]'
  
   />
    <button className="btn bg-red-500 text-white" onClick={()=>authenticate? setInterval(()=>{
    localStorage.removeItem('UsersLogedIn')
     
    window.location.reload()
    
  },1000): document.getElementById('my_modal_3').showModal()}>{authenticate?"LOGOUT":"ORDER_NOw"}</button>
    
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" action='' onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById('my_modal_3').close()}>✕</button>
    
    <h3 className='text-xl '>Sign up</h3>
    <span>username</span><br/>
   <input type='text' name='username' placeholder='Enter Your Name' className='w-96 outline-none border-2 border-zinc-400 rounded-md px-3 py-1'
   {...register('username',{required:true})} 
   /><br/>
    {errors.username && <span className='text-sm text-red-400'>This field is required</span>}<br/>
   <span>Email</span><br/>
   <input type='email' name='email' placeholder='Enter Your Email' className='w-96 outline-none border-2 border-zinc-400 rounded-md px-3 py-1'
   {...register('email',{required:true})} 
   /><br/>
   {errors.email && <span className='text-sm text-red-400'>This field is required</span>}<br/>
   <span>password</span><br/>
   <input type='password' name='password' placeholder='Enter Your password' className='w-96 outline-none border-2 border-zinc-400 rounded-md px-3 py-1'
   {...register('password',{required:true})} 
   /><br/>
   {errors.password && <span className='text-sm text-red-400'>This field is required</span>}<br/>
   <div className='flex justify-between items-center mt-2'>
   <input type='submit' value='Sign Up' className='px-3 py-1 bg-blue-500 rounded-md '/>
   <span>Already Login <a className='underline cursor-pointer text-blue-700' href='/login'>Login</a></span>
   </div>
   </form>  
  </div>
</dialog>
</div>
        </nav>
    );
};

export default Navbar;
