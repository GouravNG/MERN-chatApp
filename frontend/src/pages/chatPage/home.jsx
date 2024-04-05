import { Messages } from "../../components/Messages"
import { Chatlists } from "../../components/chatlist"
import { SelectedUserProvider } from "../../context/selectedUserContext"
import "./home.css"
export const Home=()=>{
    return(
        <SelectedUserProvider>
            <div className="home">
                <div className="chats-side-bar">
                    <Chatlists/>
                </div>
                <div className="conversation-view">
                    <Messages/> 
                </div>
            </div>
        </SelectedUserProvider>
    )
}