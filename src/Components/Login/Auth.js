import React, { useState, useEffect } from 'react'
import app from '../firebase'
import Login from './Login'
import Dashboard from '../dashboard/dashboard'


function Auth() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);



const clearInputs = () => {
  setEmail('');
  setPassword('')
}

const clearErrors = () => {
  setEmailError('');
  setPasswordError('')
}



  const handleLogin = () => {
    clearErrors();
    app.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      switch(error.code){
        case "auth/Invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(error.message)
              break;
              case "auth/wrong-password":
                setPasswordError(error.message);
                break;
                default :
                return ('')
      }
    })
  }

  const handleSignup = () => {
    clearErrors()
    app.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      switch(error.code){
        case "auth/email-already-in-use":
          case "auth/invalid-email ":
            setEmailError(error.message)
              break;
              case "auth/weak-password":
                setPasswordError(error.message);
                break;
                default :
                return ('')
      }
    })
  }


  const handleLogout = () => {
    app.auth().signOut();
  }

const authListener = () => {
  app.auth().onAuthStateChanged(user => {
    if(user){
      clearInputs();
      setUser(user)
    }else {
      setUser('')
    }
  })
}

useEffect(() => {
  authListener();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
<div>
  {user ? (
      <Dashboard handleLogout = {handleLogout} />
  ) : (
    <Login 
    email = {email}
    password = {password}
    setEmail = {setEmail}
    setPassword = {setPassword}
    handleLogin = {handleLogin}
    handleSignup = {handleSignup}
    hasAccount = {hasAccount}
    setHasAccount = {setHasAccount}
    emailError = {emailError}
    passwordError = {passwordError}
  />
  )}

</div>
  );
}

export default Auth;
