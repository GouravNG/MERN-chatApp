import { useContext, useState } from "react"
import { authContext } from "../context/authContext.mjs"

export const useLogout= ()=>{
    const [loading, setLoading]=useState(false)
    const{setAuthuser}=useContext(authContext)
    const logout=async()=>{
        setLoading(true);
        try{
            const res=await fetch("/api/auth/logout",{
                method:"POST",
                headers:{ "Content-Type": "application/json" }
            })
            const data=res.json()
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.removeItem("logged-user")
            setAuthuser(false)
        }
        catch(error){
            console.log(error.message)
        }
        finally{
            setLoading(false)
        }
    }
    return {loading,logout}
}