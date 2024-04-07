import { Userselected } from "../context/selectedUserContext"
import { useContext } from "react"

export const useGetConversations=()=>{
    const {userSelectedId,setConversationArray,setMessage}=useContext(Userselected)
    const getConversation=async()=>{
        try {
                if(!userSelectedId) return 
                const data=await fetch(`/api/message/${userSelectedId}`)
                const conversation=await data.json()
                console.log(conversation)
                if(data.error) throw new Error(data.error)
                setConversationArray(conversation)
                setMessage("")
        } catch (error) {
            console.error(error)
        }  
    }
    return getConversation        
}