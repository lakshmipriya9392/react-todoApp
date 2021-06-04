import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import firebaseConfig from '../firebase'
import { AuthContext } from '../../Auth'

 function Login({history}) {

const handleLogin = useCallback(
    async(e) => {
        e.preventDefault();
        const { email, password} = e.target.elements;
        try{
            await firebaseConfig.auth().signinWithEmailAndPassword(email.value, password.value);
            history.push('/');
        }catch(error){
            alert(error);
        }
    },[history]
);

const currentUser = useContext(AuthContext);

if(currentUser) {
    return <Redirect to = "/" />
}



    return (
        <div>
            <h1>Login</h1>
              <form onSubmit = {handleLogin}>
                <label>
                    Email
                    <input placeholder = "Enter your email" type = "email" />
                </label>
                <label>
                    Password
                    <input placeholder = "Enter your password" type = "password" />
                </label>
                <button type = "submit">Login</button>
            </form>
        </div>
    )
}

export default withRouter(Login);


