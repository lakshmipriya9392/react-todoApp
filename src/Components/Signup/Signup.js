import { Button } from 'bootstrap';
import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import firebaseConfig from '../firebase'


function Signup( {history} ) {

    const handleSignUp = useCallback(
        async(e) => {
            e.preventDefault();
            const {email, password} = e.target.elements;
            try{
                await firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch(error){
                alert(error);
            }
        },
        [history]
    );


    return (
        <div className = "signup">
            <form onSubmit = {handleSignUp}>
                <label>
                    Email
                    <input type = "email" name = "email" placeholder = "Email" />
                </label>
                <label>
                    Password
                    <input name = "password" type = "password" placeholder = "Password" />
                </label>
                <Button type = "submit">Sign Up</Button>
            </form>
        </div>
    )
}


export default withRouter(Signup);