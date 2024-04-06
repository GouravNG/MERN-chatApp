import { Userselected } from "../context/selectedUserContext"
import { useContext } from "react"

export const useGetConversations=()=>{
    const {userSelectedId,setConversationArray}=useContext(Userselected)
    const getConversation=async()=>{
        try {
                if(!userSelectedId) return 
                const data=await fetch(`/api/message/${userSelectedId}`)
                const conversation=await data.json()
                if(data.error) throw new Error(data.error)
                setConversationArray(conversation)
        } catch (error) {
            console.error(error)
        }  
    }
    return getConversation        
}