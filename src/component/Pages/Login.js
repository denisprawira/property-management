import LeftSideBg from "../../assets/leftSide.png"
import Logo from "../../assets/VBM-Logo.png"
import { useState } from "react";
import { Navigate,useNavigate } from 'react-router-dom';
import Api from '../../api/Api';

const Login =()=>{
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const pass = localStorage.getItem("access-data");
    const api = new Api();
    const login = () => {
      api
        .signIn({
          email: email,
          password: password
        })
        .then((response) =>{
            if(response.data.status==="success"){
                localStorage.setItem("access-data",JSON.stringify(response.data.results));
                navigate("/dashboard");
            }

        })
        .catch((err) => console.log(err));
    };


    if(pass){
        return <Navigate  to="/dashboard" />    
    }


    return (
         <div className="flex w-full h-full  max-sm:justify-center max-sm:items-center ">
            <div className="w-1/2 max-h-screen max-sm:hidden">
                <img className="w-full h-full" loading="lazy" src={LeftSideBg} alt="Rounded avatar"/>

            </div>
            <div className=" sm:w-1/2 flex flex-col  justify-center items-start max-lg:p-8 lg:p-32 max-sm:p-0 w-full max-sm:p-10 " >
                <img src={Logo} className="my-3 mr-3 h-12 " alt="Flowbite Logo"/>
                <h2 className="text-3xl my-3">Welcomme to</h2>
                <h2 className="text-3xl"><span className="text-orangeLight">PROPERTY</span> Admin Panel</h2>
                <p className="my-4">Sign in to your account below</p>
                <div className=" w-full flex flex-col items-start">
                    <div className="mb-6 flex flex-col items-start w-full">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type your email here" required/>
                    </div>
                    <div className="mb-6 flex flex-col items-start w-full">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium  text-gray-900 dark:text-gray-300">Password</label>
                        <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type your password here" required/>
                    </div>

                    <button onClick={login} type="submit" className="my-5 bg-orangeDark text-white bg-blue-700 hover:bg-orangeLight focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
                </div>
            </div>
        </div>

    );
}

export default Login;