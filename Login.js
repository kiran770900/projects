import React, { useState} from 'react';
import "./Login.css";
import {Link,useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
    const history = useHistory();
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
     const login = (event) =>{
         event.preventDefault();
         auth
         .signInWithEmailAndPassword(email, password)
         .then((auth)=>{
            history.push("/");
             })
             .catch((e) => alert(e.message));
     }
     const Register = event =>{
        event.preventDefault();
            auth
                 .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
                 })
                 .catch((e) => alert(e.message));
    }
    console.log()

    return (
        <div className="login">
        <Link  to="/">
        <img className="login__logo" src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png" alt="amazon logo"/>
        </Link>
        
        <div className="login__container">
        <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} className="input" type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} className="input" type="password"/>
                <button onClick={login} type="submitz" className="login__SininInButton">Sing In</button>
                <p className="p">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice .YOUR WELCOM TO AMZON BY CLICKING THAT BUTTON</p>
                <button onClick={Register} className="login__RegisterButton">Create Your Amazon Account</button>
            </form>
            </div>
        </div>
    )
}

export default Login
