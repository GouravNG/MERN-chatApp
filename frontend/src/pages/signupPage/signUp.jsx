import { Link } from "react-router-dom"
import "./signUp.css"
export const SingUp=()=>{
    return(
        <div className="pageBody">
           <div className="loginBlock">
            <div className="loginHeading"><h1>Sign Up</h1></div>
            <div className="formDiv">
                <form action="" method="post">
                    <div className="inputField"><input type="text" placeholder="Full Name" /></div>
                    <div className="inputField"><input type="text" placeholder="Username" /></div>
                    <div className="inputField"><input type="password" placeholder="Password" /></div>
                    <div className="inputField"><input type="password" placeholder="Confirm New Passoword" /></div>
                    <div className="inputField">
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="gender">Male</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="gender">Female</label>
                    </div>
                    <button>SUBMIT</button>
                </form>
                <p>Already a user? <Link to="/login">clickHere</Link></p>
            </div>
           </div>
        </div>
    )
}