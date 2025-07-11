import React from "react";
import './Spinner.css'; // Assuming you have a CSS file for styling the spinner
const Spinner =()=>{
    return(
        <div className="flex flex-col items-center space-y-2">
           <div className="spinner"></div>
           <p className=" text-bgDark text-lg font-semibold">Loading...</p>
        </div>
    )
}
export default Spinner;