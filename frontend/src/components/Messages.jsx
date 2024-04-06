// import reciever from "../assets/49.png"
import { useLogout } from "../hooks/userLogout.mjs"
// import dummyData from "../getConversation.json"
import { useContext, useEffect } from "react"
import { Userselected } from "../context/selectedUserContext"
import { useGetConversations } from "../hooks/useGetConversation.mjs"
import { authContext } from "../context/authContext.mjs"

const EachConversation=({values})=>{
    const {message,receiverId}=values
    const {authUser}=useContext(authContext)
    return(
        <>
            <li className={receiverId!==authUser._id?"left":"right"}>{message}</li> 
            {console.log(authUser,receiverId)}
        </>
    )
}

export const Messages=()=>{
    const {loading,logout}=useLogout()
    const {userSelectedId,userSelected,profileURL,conversationArray}=useContext(Userselected)
    const getConversation=useGetConversations()
    useEffect(()=>{
        getConversation()
        // console.log(conversationArray)
    },[userSelected])
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
            <input type="text" placeholder="Enter your message"/>
            <button>Send</button>
        </div>
        </>:
        <h1>Click to begin the conversation</h1>
    )
}