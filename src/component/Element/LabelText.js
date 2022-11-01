const LabelText = ({label,text})=>{
    return(
        <>
            <div className="flex flex-col items-start mt-4">
                <p className="text-sm text-lightGrey">{label}</p>
                <p className="text-base text-start text-darkGrey">{text}</p>
            </div>
        </>
    )
}

export default LabelText;