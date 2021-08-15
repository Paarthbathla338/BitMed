import React,{useState} from 'react'
import "./Login.css"
import {Link,useHistory} from "react-router-dom"
import {auth} from "./firebase"


function Login() {
    const history = useHistory()

    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const signIn= e=>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push("/")
            })
            .catch(error=>alert(error.message))


    }

    const register= e=>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                console.log(auth)
                if(auth){
                    history.push('/')
                }
            })
            .catch(error=>alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo" src="https://medicalaid.org/wp-content/uploads/sb-instagram-feed-images/internationalmedicalaid.jpg" alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" className="" value={email} onChange={e =>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" className="" value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button className="login_signIn" onClick={signIn} type="submit"><strong>Sign In</strong></button>




                </form>

                <p>By siging-in you agree to MedCode's Conditions of Use & Sale. Please see out Privacy Notice, our Cookies Notice and our Interest-Based Ads Notification</p>
                <button className="login_register" onClick={register}>Create a MedCode Account to Claim Offers</button>
            </div>



        </div>
    )
}

export default Login
