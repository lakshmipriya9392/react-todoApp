import React, {useState, useEffect} from 'react'
import firebaseConfig from './Components/firebase'


export const AuthContext = React.createContext();


export default function AuthProvider({ children }) {

const [currentUser, setCurrentUser] = useState(null);
const [pending, setPending] = useState(true)


useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
        setCurrentUser(user);
        setPending(false)
    });
}, [])

    if(pending){
        return <>Loading...</>
    }




    return (
        <AuthContext.Provider    value = {{
            currentUser,
        }}>
         {children}
        </AuthContext.Provider>
    )
}
