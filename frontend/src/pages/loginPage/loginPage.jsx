import { Link } from "react-router-dom"
import "./loginPage.css"
import { useState } from "react"
export const LoginPage=()=>{
    const [inputs,setInputs]=useState({
        username:"",
        password:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("consoling",inputs)
    }
    return(
        <div className="pageBody">
           <div className="loginBlock">
            <div className="loginHeading"><h1>Login</h1></div>
            <div className="formDiv">
                <form onSubmit={handleSubmit}>
                    <div className="inputField"><input type="text" placeholder="Username" value={inputs.username}  onChange={(e)=>setInputs({...inputs,username:e.target.value})}/></div>
                    <div className="inputField"><input type="password" placeholder="Password" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})}/></div>
                    <button>SUBMIT</button>
                </form>
                <p>New user? <Link to="/signup">Click here</Link></p>
            </div>
           </div>
        </div>
    )
}