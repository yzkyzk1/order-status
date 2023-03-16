import React, { useState } from "react";
import NewOrderForm from "./New-order-form";

export default function NewOrderBtn(){
    const [showPopUp, setShowPopUp] = useState(false)

  const handleClick = () =>{
    setShowPopUp(true)
  }
    return(
        <>
        <button className="new-order-btn" onClick={handleClick}>New Order</button>
        {showPopUp && (
            <div>
                <NewOrderForm/>
            </div>
        )}
        </>
    )
}