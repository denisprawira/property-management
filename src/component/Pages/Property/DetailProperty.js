import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LabelText from '../../Element/LabelText';

const DetailProperty = ()=>{
    const [tabToggle, setTabToggle] = useState(true);
    const {state} = useLocation();
    const [detail, setDetail] = useState({});

    useEffect(()=>{
       setDetail(state);
    },[]);

    console.log(detail)

    return(
        <>
            <section className="antialiased  text-gray-600 h-screen ">
                <h1 className="text-left">Property Detail</h1>
                <div className="flex p-4 bg-white rounded-lg">
                    <img className="h-[14.5rem] w-[21.125rem]" src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"></img>
                    <div className="pl-4">
                        <p className="">ini vie name</p>
                        <div className="flex">
                            <p>Free Hold</p>
                            <p>Villa</p>
                        </div>
                        
                        <div className="flex flex-col bg-red-400">
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
                                <p>{String(tabToggle)}</p>
                            </div>
                        </div>
                        <p>dfdf</p>
                    </div>
                </div>

                <div className="w-full flex justify-between mt-5">
                <div class="rounded-lg text-sm w-4/6 mr-4 font-medium text-center text-gray-500 border-b bg-white">
                    <ul class="flex flex-wrap -mb-px">
                    <li class="mr-2" onClick={()=>setTabToggle(true)}>
                            <a href="#" class={`${tabToggle? 'border-orangeLight':''} inline-block p-4 text-blue-600 rounded-t-lg border-b-[0.20rem]   dark:text-blue-500 dark:border-blue-500`} aria-current="page">Profile</a>
                        </li>
                        <li class="mr-2" onClick={()=>setTabToggle(false)}>
                            <a href="#" class={`${tabToggle? '':'border-orangeLight'} inline-block p-4 text-blue-600 rounded-t-lg border-b-[0.20rem]   dark:text-blue-500 dark:border-blue-500`} aria-current="page">Dashboard</a>
                        </li>
                    </ul>
                    <hr/>
                    <div className="bg-white p-4">
                        {JSON.stringify(detail) === '{}'? 'Loading...':
                            detail.type.name==="villa"? (
                                <>
                                <div className="flex flex-col justify-start">
                                    <LabelText label={"Contact"} text={"contact name"}/>
                                    <LabelText label={"Villa Type"} text={"contact name"}/>
                                    <LabelText label={"Land Size"} text={detail.building.landSize}/>
                                    <LabelText label={"Year Built"} text={detail.building.yearOfConstruction}/>
                                    <LabelText label={"NPWPD"} text={detail.building.NPWPD? "Yes":"No"}/>
                                    <LabelText label={"Roof Type"} text={detail.building.roofTypes==null? '--':detail.building.roofTypes}/>
                                    <LabelText label={"Does it have IMB?"} text={detail.building.IMB.display}/>
                                    <LabelText label={"IMB Type"} text={detail.building.IMBType.display}/>
                                    <LabelText label={"Valid Until"} text={detail.building.validUntil==null? '--':detail.building.validUntil}/>
                                </div>
                                <div className="flex flex-col justify-start">
                                    <LabelText label={"Location"} text={detail.location.address==null?'--':detail.location.address}/>
                                    <LabelText label={"Meeting Point"} text={detail.meetingPoint.address==null?'--':detail.meetingPoint.address}/>
                                    <LabelText label={"Area"} text={detail.location.area.name==null?'--':detail.location.area.name}/>
                                    <LabelText label={"Notes"} text={detail.meetingPoint.notes==null?'--':detail.meetingPoint.notes}/>
                                </div> 
                                </>
                            ):"this is land"
                        }

                    </div>
                </div>
                <div className="flex p-4 bg-white  w-1/3 rounded-lg">History</div>
                </div>        

                <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">

</div>      
            </section>
        </>
    );
}

export default DetailProperty;