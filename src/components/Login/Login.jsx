import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.inti";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result=>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser)
    })
    .catch(error=>{
        console.log(error)
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* user ? logout : sign in */}
      {user ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Google Log in</button>
          <button onClick={handleGithubSignIn}>Github Log in</button>
        </div>
      )}
      {user && (
        <div>
          <h3>User : {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
