import { useEffect, useState } from "react"
export const useGetUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetch("/api/user")
                const users = await data.json()
                if (data.error) throw new Error(data.error)
                setUsers(users)
            }
            catch (error) {
                console.error(error.message)
            }
        }
        getUsers()
    }, [])

    return users
}