import { useEffect,useState } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Api from "../../api/Api";

const Property = ()=>{
    const [properties,setProperties] = useState([]);
    const navigate = useNavigate();
    
      
    const detailProperty = (item)=>{
        navigate(`/dashboard/property/${item.id}`,{state:item});
    }

    const api = new Api();
    const getPropertyList = ()=>{
        api
        .getPropertyList()
        .then((response) => {
            setProperties(response.data.results.properties);
            console.log(response.data.results.properties);
        })
        .catch((err) => console.log(err));
    }

    useEffect(()=>{
      getPropertyList();
    },[])

    return(
        <>
       <section className="antialiased  text-gray-600 h-screen ">
                <div className="flex flex-col  h-full">
                    <div className="w-full p-6  mx-auto bg-white  rounded-md border border-gray-200">
                        <header className="flex justify-start px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800">Property List</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold  text-darkGrey ">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">ID Property</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Property Image</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Property Name</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Owner Name</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Created On</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Entried By</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Status</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {properties.map(item=>(
                                            <tr onClick={()=>detailProperty(item)} key={item.number+item.id} className="hover:bg-slate-100 cursor-pointer">
                                                <td className="p-2 whitespace-nowrap flex text-c">
                                                    {`#${item.number}`}
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                   <img src={item.photos[0]}/>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex flex-col items-start">
                                                        <div className="font-medium text-left text-gray-800">Alex Shatov</div>
                                                        <div className="font-medium text-left text-gray-800">Alex Shatov</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-left">??</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-left">{item.createdAt}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex flex-col items-center">
                                                        <div className="font-medium text-gray-800">{item.createdBy.nickName}</div>
                                                        <div className="font-medium text-gray-800">{item.createdBy.position.name}</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex flex-col items-center">
                                                        <div className="font-medium text-gray-800">{item.status.display}</div>
                                                        <div className="flex flex-col">
                                                            <div>Progress</div>
                                                            <div>{`${item.progress}%`}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
              
            </section>
        </>
    )
}

export default Property