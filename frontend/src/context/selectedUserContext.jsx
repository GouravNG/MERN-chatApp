import { createContext, useState } from "react";

export const Userselected=createContext()

export const SelectedUserProvider=({children})=>{
    const [userSelected,setUserSelected]=useState()
    const [userSelectedId,setUserSelectedId]=useState()
    const [conversationArray,setConversationArray]=useState([])
    const [message,setMessage]=useState()
    const [profileURL,setProfileURL]=useState("")
    return <Userselected.Provider 
    value={
        {userSelected,setUserSelected,
        userSelectedId,setUserSelectedId,
        conversationArray,setConversationArray,
        profileURL,setProfileURL,
        message,setMessage}}>
        {children}
    </Userselected.Provider>
}