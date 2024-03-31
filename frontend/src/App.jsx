import { Route, BrowserRouter, Routes } from "react-router-dom"
import './App.css'
import { Home } from './pages/chatPage/home'
import { LoginPage } from './pages/loginPage/loginPage'
import {SingUp} from './pages/signupPage/signUp'
import NotFound from "./pages/handlerPages/404"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SingUp/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
