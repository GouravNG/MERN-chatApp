// import reciever from "../assets/49.png"
import { useLogout } from "../hooks/userLogout.mjs"
// import dummyData from "../getConversation.json"
import { useContext, useEffect } from "react"
import { Userselected } from "../context/selectedUserContext"
import { useGetConversations } from "../hooks/useGetConversation.mjs"
import { authContext } from "../context/authContext.mjs"
import { useSendMessage } from "../hooks/useSendMessage.mjs"

const EachConversation=({values})=>{
    const {message,receiverId}=values
    const {authUser}=useContext(authContext)
    return(
        <>
            <li className={receiverId!==authUser._id?"left":"right"}>{message}</li> 
            {console.log("logged user",authUser._id,"receiver user id",receiverId)}
        </>
    )
}

export const Messages=()=>{
    const {logout}=useLogout()
    const {userSelectedId,userSelected,profileURL,conversationArray,message,setMessage}=useContext(Userselected)
    const getConversation=useGetConversations()
    const sendMessage=useSendMessage()
    useEffect(()=>{
        console.log(conversationArray)
        getConversation()
    },[userSelected,message])
    const handleMessageSend=(e)=>{
        sendMessage(message,userSelectedId,setMessage)
    }
    return(
        userSelected&&userSelectedId?
        <>
        <div className="top-header">
            <img src={profileURL}   alt="chat user "  width="70px"/>
            <h1>{userSelected}</h1>
            <button onClick={()=>{logout()}}>Logout</button>
        </div>
        <div  className="conversations">
            <ul>
                {
                    conversationArray.map((i)=>{
                        return <EachConversation key={i._id} values={i}/>
                    })
                }
            </ul>
        </div>
        <div className="footBar">
            <input type="text" placeholder="Enter your message" onChange={(e)=>setMessage(e.target.value)}/>
            <button onClick={()=>{handleMessageSend()}}>Send</button>
        </div>
        </>:
        <h1>Click to begin the conversation</h1>
    )
}