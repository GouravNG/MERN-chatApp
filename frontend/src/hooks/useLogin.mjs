import { useContext, useState } from "react"
import { authContext } from "../context/authContext.mjs"

export const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthuser } = useContext(authContext)

    const login = async ({ username: userName, password }) => {
        const clientValidationStatus = clientValidation(userName, password)
        if (!clientValidationStatus) return;
        setLoading(true)
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password })
            })
            const data = await res.json()
            if (data.error) throw new Error(data.error)
            localStorage.setItem("logged-user", JSON.stringify(data))
            setAuthuser(true)
        }
        catch (error) {
            console.error(error.message)
        }
        finally {
            setLoading(false)
        }

    }
    return { loading, login }
}
const clientValidation = (username, password) => {
    if (!username || !password) {
        console.error("please fill all the fields")
        return false
    }
    return true
}