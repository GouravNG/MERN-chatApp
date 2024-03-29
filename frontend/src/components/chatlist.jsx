import userPic from "../assets/49.png"
export const Chatlists=()=>{
    return(
    <>
        <div className="chat-search">
            <input type="text" placeholder="Search here"/>
        </div>
        <div className="chat-lists">
            <ul>
                <li>
                    <img src={userPic} alt="userImage" width="60px"/>
                    <h2>UserName</h2>
                </li>
                <li>
                    <img src={userPic} alt="userImage" width="60px"/>
                    <h2>UserName</h2>
                </li>
                <li>
                    <img src={userPic} alt="userImage" width="60px"/>
                    <h2>UserName</h2>
                </li>
                <li>
                    <img src={userPic} alt="userImage" width="60px"/>
                    <h2>UserName</h2>
                </li>
                <li>
                    <img src={userPic} alt="userImage" width="60px"/>
                    <h2>UserName</h2>
                </li>
                <li>
                    <img src={userPic} alt="userImage" width="60px"/>
                    <h2>UserName</h2>
                </li>
                <li>
                    <img src={userPic} alt="userImage" width="60px"/>
                    <h2>UserName</h2>
                </li>
                <li>
                    <img src={userPic} alt="userImage" width="60px"/>
                    <h2>UserName</h2>
                </li>
                <li>
                    <img src={userPic} alt="userImage" width="60px"/>
                    <h2>UserName</h2>
                </li>
            </ul>
        </div>
        
    </>
    )
}