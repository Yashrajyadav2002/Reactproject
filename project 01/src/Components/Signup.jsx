import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ()=>{
    let [signfrm,setSignfrm] = useState({})
    let navigator = useNavigate()

    function handleinput(e){
        const {name,value} = e.target
        setSignfrm({...signfrm,[name]:value})
    }

    function handlesubmit(e){
        e.preventDefault()
        localStorage.setItem("signfrm",JSON.stringify(signfrm))
        navigator('/login')
    }

    return(

        <>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name"  onChange={handleinput}/><br /><br />

            <label htmlFor="">Email</label>
            <input type="text" name="email"  onChange={handleinput}/><br /><br />

            <label htmlFor="">Password</label>
            <input type="text" name="password"  onChange={handleinput}/><br /><br />

            <input type="submit" />

        </form>
        
        </>
    )
}
export default Signup