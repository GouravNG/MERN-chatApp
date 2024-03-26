import "./loginPage.css"
export const LoginPage=()=>{
    return(
        <div className="pageBody">
           <div className="loginBlock">
            <div className="loginHeading"><h1>Login</h1></div>
            <div className="formDiv">
                <form action="" method="post">
                    <div className="inputField"><input type="text" placeholder="Username" /></div>
                    <div className="inputField"><input type="password" placeholder="Password" /></div>
                    <button>SUBMIT</button>
                </form>
                <p>New user? click here</p>
            </div>
           </div>
        </div>
    )
}