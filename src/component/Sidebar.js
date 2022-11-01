import Logo from "../assets/VBM-Logo.png"
import {Squares2X2IconOutline,Squares2X2IconFill,HomeIconOutline,HomeIconFill, UserCircleIconOutline, UserCircleIconFill} from "./IconLib"
import { Link } from 'react-router-dom';

const Sidebar =()=>{
    return (
 
<aside className="w-64 h-screen bg-white" aria-label="Sidebar">
   <div className="overflow-y-auto py-4 px-3 bg-white rounded ">
      <a href="#" className="justify-center flex items-center pl-2.5 mb-5">
         <img src={Logo} className="mr-3 h-12 " alt="Flowbite Logo"/>
        
      </a>
      <ul className="space-y-2 mt-8">
         <li>
            <Link to={"/dashboard/welcome"}>
               <div className="flex items-center p-2 text-base font-normal  text-gray-900 rounded-lg   hover:bg-slate-200 dark:hover:bg-gray-700">
                  <Squares2X2IconOutline/>
                  <span className="ml-3">Dashboard</span>
               </div>
            </Link>
         </li>
         <li>
            <Link to={"/dashboard/property"}>
               <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg   hover:bg-slate-200 dark:hover:bg-gray-700">
                  <HomeIconOutline/>
                  <span className="ml-3">Property Management </span>
               </div>
            </Link>
         </li>
         <li>
         <Link to={"/dashboard/contact"}>
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg   hover:bg-slate-200 dark:hover:bg-gray-700">
               <UserCircleIconOutline/>
               <span className="ml-3">Contact Management</span>
            </div>
         </Link>
         </li>
      </ul>
   </div>
</aside>

    );
}

export default Sidebar;