import { Link } from "react-router-dom"
import "./signUp.css"
import { useState } from "react"
import { useSignup } from "../../hooks/signUpchecker.mjs"
import { Loading } from "../../components/loading"
export const SingUp=()=>{
    const [input, setInput]=useState({
        fullName:"",
        userName:"",
        password:"",
        confirPassWord:"",
        gender:""
    })
    const {loading,signupCheck}=useSignup()

    const handleSubmit=async (e)=>{
        e.preventDefault()
        await signupCheck(input)
        
    }
    return(
        <div className="pageBody">
            {loading&&<Loading/>}
           <div className="loginBlock">
            <div className="loginHeading"><h1>Sign Up</h1></div>
            <div className="formDiv">
                <form onSubmit={handleSubmit}>
                    <div className="inputField"><input type="text" value={input.fullName} onChange={(e)=>setInput({...input,fullName :e.target.value})} placeholder="Full Name" /></div>
                    <div className="inputField"><input type="text" value={input.userName} onChange={(e)=>setInput({...input,userName :e.target.value})} placeholder="Username" /></div>
                    <div className="inputField"><input type="password" value={input.password} onChange={(e)=>setInput({...input,password :e.target.value})} placeholder="Password" /></div>
                    <div className="inputField"><input type="password" value={input.confirPassWord} onChange={(e)=>setInput({...input,confirPassWord :e.target.value})} placeholder="Confirm New Passoword" /></div>
                    <div className="inputField">
                    <input type="radio" id="male" name="gender" value="male" onChange={(e)=>setInput({...input,gender:e.target.value})} />
                    <label htmlFor="gender">Male</label>
                    <input type="radio" id="female" name="gender" value="female" onChange={(e)=>setInput({...input,gender:e.target.value})}/>
                    <label htmlFor="gender">Female</label>
                    </div>
                    <button>SUBMIT</button>
                </form>
                <p>Already a user? <Link to="/login">clickHere</Link></p>
            </div>
           </div>
        </div>
    )
}