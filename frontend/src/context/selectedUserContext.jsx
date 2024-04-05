import { createContext, useState } from "react";

export const Userselected=createContext()

export const SelectedUserProvider=({children})=>{
    const [userSelected,setUserSelected]=useState(null)
    const [userSelectedId,setUserSelectedId]=useState(null)
    return <Userselected.Provider value={{userSelected,setUserSelected,userSelectedId,setUserSelectedId}}>
        {children}
        {console.log(userSelected,userSelectedId)}
    </Userselected.Provider>
}