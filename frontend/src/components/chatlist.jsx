import { useContext } from "react";
import { useGetUsers } from "../hooks/useGetUser.mjs";
import { Userselected } from "../context/selectedUserContext";

const EachChat = ({ values }) => {
    const {setUserSelectedId,setUserSelected,setProfileURL}=useContext(Userselected)
    const { _id, fullName, profilePic, gender } = values;
    const handleClick = (e) => {
      setUserSelectedId(_id)
      setUserSelected(fullName)
      setProfileURL(profilePic)
    };
  
    return (
      <>
        <li onClick={handleClick}>
          <img src={profilePic} alt={`${gender}`} width="60px" />
          <h2>{fullName}</h2>
        </li>
        {console.log(`U clicked on the user ${fullName} and his id is ${_id}`)}
      </>
    );
  };

export const Chatlists=()=>{
  const userData=useGetUsers()
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