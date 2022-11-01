import { useState } from "react";
import { useLocation } from "react-router-dom";

const DetailProperty = ()=>{
    const [con, setCon] = useState(false);
    const {state} = useLocation();
    console.log(state);

    return(
        <>
            <section className="antialiased  text-gray-600 h-screen ">
                <h1>Property Detail</h1>
                <div className="p-4 bg-white">
                    <img className="h-[14.5rem] w-[21.125rem]" src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"></img>
                    <div>
                        <p className={`ease-in duration-200 ${con? 'bg-green':'bg-red-400'}`}>ini vie name</p>
                        <div className="flex">
                            <p>Free Hold</p>
                            <p>Villa</p>
                        </div>
                        
                        <div onClick={()=>setCon(con=>!con)} className="flex flex-col bg-red-400">
                            <p>ID Property</p>
                            <p>Villa</p>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col">
                                <p>Created On</p>
                                <p>Villa</p>
                            </div>
                            <div className="flex flex-col">
                                <p>Entried By</p>
                                <p>Villa</p>
                            </div>
                        </div>
                        <p>pending</p>
                    </div>
                </div>

                <div>detail info</div>
              
            </section>
        </>
    );
}

export default DetailProperty;