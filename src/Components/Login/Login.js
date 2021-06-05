import React from 'react'

export default function Login(props) {

const { email, password, setEmail, setPassword, emailError, passwordError, handleLogin, handleSignup, hasAccount, setHasAccount} = props;


    return (
        <section className = "login">
            <div className = "loginContainer">
                <label>Username</label>
                <input autoFocus type = "text" required value = {email} onChange = {(e) => setEmail(e.target.value)} />
                <p className = "errorMsg">{emailError}</p>
                <label>Password</label>
                <input autoFocus type = "password" required value = {password} onChange = {(e) => setPassword(e.target.value)} />
                <p className = "errorMsg">{passwordError}</p>
                <div className = "btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick = {handleLogin}>Login</button>
                        <p>Don't have an account ? <span onClick = {() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ): (
                        <>
                        <button onClick = {handleSignup}>Signup</button>
                        <p>Have an account ? <span onClick = {() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
