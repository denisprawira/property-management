import Logo from "../../assets/VBM-Logo.png"
import {Squares2X2IconOutline,Squares2X2IconFill,HomeIconOutline,HomeIconFill, UserCircleIconOutline, UserCircleIconFill} from "../IconLib"
import { Link } from 'react-router-dom';

const Sidebar =(props)=>{

    return (
      <>
         <div className={`${props.sidebarToggle? 'hidden':'block transition-all duration-[400ms] ease-out max-sm:h-full max-sm:w-full bg-neutral-900 max-sm:z-10 max-sm:absolute max-sm:opacity-50'} `}/>
         <aside className={`sticky top-0 ${props.sidebarToggle? 'w-16':'w-64'} max-sm:${props.sidebarToggle? 'w-0':'w-64'} max-sm:absolute max-sm:z-20  h-screen bg-white transition-all duration-300  z-[10]`} aria-label="Sidebar">
            <div className='overflow-y-auto py-4 px-3 rounded'>
               <a href="#" className="h-12 justify-center flex items-center pl-2.5 mb-5">
                  <img src={Logo} className={`${props.sidebarToggle? 'h-8': 'h-12'} mr-3`} alt="Flowbite Logo"/>
               
               </a>
               <ul className="space-y-2 mt-8 overflow-hidden">
                  <li>
                     <Link to={"/dashboard/welcome"}>
                        <div className="overflow-hidden flex items-center p-2 text-base font-normal  text-gray-900 rounded-lg   hover:bg-slate-200 dark:hover:bg-gray-700">
                           <Squares2X2IconOutline className="z-10"/>
                           <span className={`${props.sidebarToggle? 'hidden': 'block'} whitespace-nowrap duration-[6000ms] ml-3`}>Dashboard</span>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to={"/dashboard/property"}>
                        <div className="overflow-hidden flex items-center p-2 text-base font-normal text-gray-900 rounded-lg   hover:bg-slate-200 dark:hover:bg-gray-700">
                           <HomeIconOutline className="z-10"/>
                           <span className={`${props.sidebarToggle? 'hidden': 'block'} whitespace-nowrap transition-all duration-[6000ms] ml-3`}>Property Management </span>
                        </div>
                     </Link>
                  </li>
                  <li>
                  <Link to={"/dashboard/contact"}>
                     <div className="overflow-hidden flex items-center p-2 text-base font-normal text-gray-900 rounded-lg   hover:bg-slate-200 dark:hover:bg-gray-700">
                        <UserCircleIconOutline className="z-10"/>
                        <span className={`${props.sidebarToggle? 'hidden': 'block'} whitespace-nowrap transition-all duration-[6000ms] ml-3`}>Contact Management</span>
                     </div>
                  </Link>
                  </li>
               </ul>
            </div>
         </aside>
      </>
    );
}

export default Sidebar;