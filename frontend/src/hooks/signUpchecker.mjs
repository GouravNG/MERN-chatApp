import { useContext, useState } from "react"
import { authContext } from "../context/authContext.mjs"

export const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthuser}=useContext(authContext)

    const signupCheck = async ({ fullName, userName, password, confirPassWord, gender }) => {
        const clientCheckSuccess = clientSideValidations({ fullName, userName, password, confirPassWord, gender })
        if (!clientCheckSuccess) return
        setLoading(true)
        try {
            const res = await fetch("/api/auth/signUp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, userName, password, confirPassWord, gender })
            })
            const data = await res.json()
            console.log(data)
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("logged-user", JSON.stringify(data))
            setAuthuser(true)
        }
        catch (err) {
            console.error(err.message)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, signupCheck }
}

const clientSideValidations = ({ fullName, userName, password, confirPassWord, gender }) => {
    if (!fullName || !userName || !password || !confirPassWord || !gender) {
        console.error("Please enter all the fields")
        return false
    }
    if (password.length < 6) {
        console.error("Minimum length allowed is 6")
        return false
    }
    if (confirPassWord !== password) {
        console.error("Password and confirm password are not matching")
        return false
    }
    return true
}