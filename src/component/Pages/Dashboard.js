import Sidebar from "../Element/Sidebar"
import Navbar from "../Element/Navbar"
import { Outlet,useNavigate,Navigate } from 'react-router-dom';
import { useState } from 'react';


const Dashboard = ()=>{
    const navigate = useNavigate();
    const [sidebarToggle,setSidebarToggle]  = useState(false);
    const pass = localStorage.getItem("access-data");
    if(!pass){
        return <Navigate  to="/" />   
    }
    
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