import React from "react";
import Try from "../Try";
import { Bars3Icon } from '@heroicons/react/20/solid'

const Navbar = (props)=>{

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky   flex flex-wrap items-center justify-between px-2  bg-white h-16 min-h-[4rem] bg-white-100 w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full  relative flex justify-between items-stretch">
            <div className="flex justify-center items-center" >
            <Bars3Icon onClick={()=>props.setSidebarToggle(value=>!value)}
              className="mr-8 ml-2  h-5 w-5 cursor-pointer  hover:text-slate-400"
              aria-hidden="true"
            />
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase " href="#pablo">
              Dashboard
            </a>
            </div>
            <Try/>
          </div>

        </div>
      </nav>
    </>
  );
}
 
export default Navbar;