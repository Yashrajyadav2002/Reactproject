import { useState } from "react";

const Login = ()=>{
    let [loginfrm,setlogin] = useState({})
    let [sign,setsign] = useState({})

    function handleinput(e){
        const{name,value} = e.target
        setlogin({...loginfrm,[name]:value})
    }

    function handeloginsubmit(e){
        e.preventDefault()
        let sett = JSON.parse(localStorage.getItem('signfrm'))
        setsign(sett)

        if(loginfrm.email != sign.email || loginfrm.password != sign.password){
            alert("user not found")
        }
    }

    return(

        <>
        <h1>Login page</h1>

        <form action="" onSubmit={handeloginsubmit}>
            <label htmlFor="">Email</label>
            <input type="text" name="email" onChange={handleinput} /><br /><br />

            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={handleinput} /><br /><br />

            <input type="submit" />
        </form>
        
        </>
    )
}
export default Login