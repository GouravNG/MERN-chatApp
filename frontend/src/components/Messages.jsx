import reciever from "../assets/49.png"
import { useLogout } from "../hooks/userLogout.mjs"
import dummyData from "../getConversation.json"

const EachConversation=({values})=>{
    const {message,receiverId}=values
    return(
        <>
            <li className={receiverId!=="65fdaf4b2c2245a3b9a9b78c"?"left":"right"}>{message}</li> {/*hard coded for now*/}
        </>
    )
}

export const Messages=()=>{
    const {loading,logout}=useLogout()
    return(
        <>
        <div className="top-header">
            <img src={reciever}   alt="chat user "  width="70px"/>
            <h1>Reciever Name</h1>
            <button onClick={()=>{logout()}}>Logout</button>
        </div>
        <div  className="conversations">
            <ul>
                {
                    dummyData.map((i)=>{
                        return <EachConversation key={i._id} values={i}/>
                    })
                }
            </ul>
        </div>
        <div className="footBar">
            <input type="text" placeholder="Enter your message"/>
            <button>Send</button>
        </div>
        </>
    )
}