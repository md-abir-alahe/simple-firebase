import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.inti';

const Login = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Log in</button>
        </div>
    );
};

export default Login;