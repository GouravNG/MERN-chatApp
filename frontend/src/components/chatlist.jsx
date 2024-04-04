import userPic from "../assets/49.png"
import userData from "../getUser.json"

const EachChat = ({ values }) => {
    const { _id, fullName, profilePic, gender } = values;
    const handleClick = (e) => {
      const userId = e.currentTarget.getAttribute('userid');
      console.log(e.target.innerText)
      console.log(userId);
    };
  
    return (
      <>
        <li userid={_id} onClick={handleClick}>
          <img src={profilePic} alt={`${gender}`} width="60px" />
          <h2>{fullName}</h2>
        </li>
      </>
    );
  };

export const Chatlists=()=>{
    return(
    <>
        <div className="chat-search">
            <input type="text" placeholder="Search here"/>
        </div>
        <div className="chat-lists">
            <ul>
                {
                    userData.map((i)=>{
                        return <EachChat key={i._id} values={i}/> 
                    })
                }
            </ul>
        </div>
        
    </>
    )
}