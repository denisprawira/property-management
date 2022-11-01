import { ErrorResponse } from "@remix-run/router";
import { useEffect, useState } from "react"
import Api from "../../../api/Api";

const Contact = ()=>{
    const [contacts,setContacts]  = useState([]);
    const api = new Api();
    const getContactList = ()=>{
        api
        .getContactList()
        .then((response) => {
            setContacts(response.data.results.contacts);
            console.log(response.data.results.contacts);
        })
        .catch((err) => console.log(err));
    }
    
    useEffect(()=>{
        getContactList()
    },[])

    return(
        <>
            <section className="antialiased bg-red text-gray-600 h-screen ">
                <div className="flex flex-col  h-full">

                    <div className="w-full p-6  mx-auto bg-white  rounded-md border border-gray-200">
                        <header className="flex justify-start px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800">Contact</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto flex ">
                                {contacts.map(item=>(
                                    <div key={item.id+item.name}  className="p-6  max-w-sm bg-white hover:bg-slate-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                        <p className="mb-3 py-1 text-left font-normal text-gray-700 dark:text-gray-400">{item.phoneNumber==null? "-":item.phoneNumber}</p>
                                        <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">{item.email}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact