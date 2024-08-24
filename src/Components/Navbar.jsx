import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setSearch } from './Slices/SearchSlice';
const Navbar =() => {
const dispatch=useDispatch();
    return (
        <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3'>
<div>
<h3 className='text-xl text-gray-800 font-bold '>{new Date().toUTCString().slice(0,16)}</h3>
<h1 className='text-2xl font-bold'>Foods Resto</h1>
</div>
<div>
    <input type='search' name='search' placeholder='search here' autoComplete='off' onChange={(e)=>dispatch(setSearch(e.target.value))}
    className='p-3 border border-gray-800 outline-none rounded-lg text-sm w-full lg:w-[25vw]'
    />
</div>
        </nav>
    );
};

export default Navbar;
