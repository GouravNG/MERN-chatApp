import { createContext, useState } from "react";

export const Userselected=createContext()

export const SelectedUserProvider=({children})=>{
    const [userSelected,setUserSelected]=useState(null)
    const [userSelectedId,setUserSelectedId]=useState(null)
    const [conversationArray,setConversationArray]=useState([])
    const [message,setMessage]=useState()
    const [profileURL,setProfileURL]=useState("")
    return <Userselected.Provider value={{userSelected,setUserSelected,userSelectedId,setUserSelectedId,conversationArray,setConversationArray,profileURL,setProfileURL,message,setMessage}}>
        {children}
        {console.log(userSelected,userSelectedId)}
    </Userselected.Provider>
}