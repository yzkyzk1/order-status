import React, {useState} from "react";

export default function NewOrderForm({onSave}){
    const [company, setCompany] = useState("")
    const [status, setStatus] = useState("")
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        onSave({company, status})
        setCompany("");
        setStatus("");
    }
    return(
        <div>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}></input>
            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)}></input>
            <button type="submit">Submit</button>
        </div>
    )
}