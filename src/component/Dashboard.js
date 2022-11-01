import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom';


const Dashboard = ()=>{
    return(
        <>
            <div>
                <Sidebar/>
            </div>
            <div className='flex justify-start flex-col w-full'>
                <Navbar/>
                <div className="p-6 ">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Dashboard;