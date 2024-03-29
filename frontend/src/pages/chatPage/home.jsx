import { Messages } from "../../components/Messages"
import { Chatlists } from "../../components/chatlist"
import "./home.css"
export const Home=()=>{
    return(
        <div className="home">
            <div className="chats-side-bar">
                    <Chatlists/>
            </div>
            <div className="conversation-view">
                <Messages/> 
            </div>
        </div>
    )
}