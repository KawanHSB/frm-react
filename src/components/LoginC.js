import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../assets/config/firebase-config";


const LoginC = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const singin = (app) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate('/home')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

   /* const singin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(auth=>{navigate("/home")})
        .catch(error=>console.error(error))
    }*/

    return(

    <div className="container_login"> 
        <header className="header_top_bar">
            <div>
                <img src="../assets/img/Logo_Header.png"/>
                <h1 className="bemvindo">Bem vindo!</h1>
            </div>
            <div className="container_form_login">
                <form >
                    <label htmlFor="email">Login</label>
                    <input type="email" id="email" name="email" placeholder="Seu login" 
                        onChange={(e) => setEmail(e.target.value)}/>
                        
                    <label htmlFor="lname">Senha</label>
                    <input type="password" id="senha" name="senha" placeholder="Sua senha"
                        onChange={(e) => setPassword(e.target.value)}/>
                    
                    <button onClick={singin} id="bt_login" name="bt_login">Entrar</button>
                </form>
            </div>
        </header>
    </div>
    );
}

export default LoginC