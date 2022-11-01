import Sidebar from "../Element/Sidebar"
import Navbar from "../Element/Navbar"
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = ()=>{

    const [sidebarToggle,setSidebarToggle]  = useState(false);

    
    return(
        <>
            <div>
                <Sidebar sidebarToggle={sidebarToggle}/>
            </div>
            <div className='flex justify-start flex-col w-full'>
                <Navbar setSidebarToggle={setSidebarToggle}/>
                <div className="p-6 ">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Dashboard;