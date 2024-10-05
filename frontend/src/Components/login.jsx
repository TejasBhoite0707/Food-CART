import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
function Login () {
  
  
  
  let navigate=useNavigate();
  const{
    register,
    handleSubmit,
    formState:{errors}
  }=useForm()
  const onSubmit=async(data)=>{
let userinfo={
  email:data.email,
  password:data.password
};

await axios.post('http://localhost:4002/user/login',userinfo).then((res)=>{
  console.log(res.data);
  if(res.data){
    navigate('/')
    toast.success("Login Successfully")
   
    document.getElementById('my_modal_3').close()
    setTimeout(()=>{
     
      localStorage.setItem('UsersLogedIn',JSON.stringify(res.data.user))
      window.location.reload()
    },1000)
  }
  
}).catch((err)=>{
  if(err.response){
    console.log(err);
    toast.error(err.response.data.message);
    setTimeout(()=>{},3000)
      }
  
})
  }
  return (
    <div className='flex justify-center min-h-screen items-center bg-gradient-to-r to-pink-700 ring-red-600'>
          <div>
      <button className="btn bg-blue-600 text-white" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login Here</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
   <Link to='/'> <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById('my_modal_3').close()}
      >✕</button></Link> 
    
    <h3 className="font-bold text-lg mb-2">Login Here</h3>
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
    <input type='submit' value='Login' className='bg-blue-600 rounded-md px-3 py-1 mt-3'/>
    </form>
  </div>
</dialog>
    </div>
    </div>
  
  )
}

export default Login;
