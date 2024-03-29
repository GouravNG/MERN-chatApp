import reciever from "../assets/49.png"
export const Messages=()=>{
    return(
        <>
        <div className="top-header">
            <img src={reciever}   alt="chat user "  width="70px"/>
            <h1>Reciever Name</h1>
            <button>Logout</button>
        </div>
        <div  className="conversations">
            <ul>
                <li className="left">test</li>
                <li className="right">test</li>
                <li className="left">test</li>
                <li className="left">test</li>
                <li className="right">test</li>
                <li className="left">test</li>
                <li className="left">test</li>
                <li className="left">test</li>
                <li className="right">test</li>
                <li className="left">test</li>
                <li className="left">test</li>
                <li className="left">test</li>
                <li className="right">test</li>
                <li className="left">test</li>
            </ul>
        </div>
        <div className="footBar">
            <input type="text" placeholder="Enter your message"/>
            <button>Send</button>
        </div>
        </>
    )
}