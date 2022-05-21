import React, { useState } from 'react';
import Routes from '../Routes/Routes';
import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Header = () => {
    const [open,setOpen] = useState(false);
    const routes = [
        {id:1, name:'Home', link:'/home'},
        {id:2, name:'Shop', link:'/shop'},
        {id:3, name:'Deals', link:'/deals'},
        {id:4, name:'Coupons', link:'/coupons'},
        {id:5, name:'Contacts', link:'/contacts'},
    ]
    return (
        <div>
            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden bg-indigo-200'>
                {open?<XIcon></XIcon>:<MenuIcon></MenuIcon>}
            
            </div>
            <ul className={`md:flex justify-center absolute w-full md:static bg-indigo-200 duration-500 ease-in ${open?'top-6':'top-[-120px]'}`}>
                {
                    routes.map(route => <Routes 
                    key ={route.id}
                    route = {route}
                    ></Routes>)
                }
            </ul>
            <h2 className='text-4xl'>Save your money</h2>
            <p>By giving to me!!!</p>
        </div>
    );
};

export default Header;