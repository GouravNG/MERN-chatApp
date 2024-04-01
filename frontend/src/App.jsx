import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import {useState} from "react"
import './App.css'
import { Home } from './pages/chatPage/home'
import { LoginPage } from './pages/loginPage/loginPage'
import {SingUp} from './pages/signupPage/signUp'
import NotFound from "./pages/handlerPages/404"

import { authContext } from "./context/authContext.mjs"
function App() {
  const [authUser, setAuthuser] = useState(JSON.parse(localStorage.getItem("logged-user")) || null)
  return (
  <authContext.Provider value={{authUser,setAuthuser}}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={authUser?<Home/>:<Navigate to="/signup"/>}/>
          <Route path="/signup" element={authUser?<Navigate to="/"/>:<SingUp/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
</authContext.Provider>
  )
}
export default App
