import React from "react";

function Login(){
    return(
        <div className="login-container">
            <br />
            <form action="POST">
                <input type="email" name="email" id="login-email" placeholder="Email Address"/>
                <label htmlFor="email">Email</label>
                <br />

                <input type="password" name="pw" id="login-pw" placeholder="Password"/>
                <label htmlFor="pw">Password</label>
                <br />

                <input type="submit" name="submit" id="submit" />
            </form>
        </div>
    )
}
export default Login;