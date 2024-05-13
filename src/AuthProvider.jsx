import { createUserWithEmailAndPassword,
    GoogleAuthProvider ,
     onAuthStateChanged,
     signInWithEmailAndPassword, 
     signInWithPopup,
     signOut} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase/firebase.init'
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()




    const registerUser = (email , password) =>{
      return   createUserWithEmailAndPassword(auth,email,password)
        
    }

    const loggginUser = (email,password) =>{
    return   signInWithEmailAndPassword(auth,email,password)
        
    }

    const googleLogin = () =>{
        return signInWithPopup(auth , googleProvider)
    }
  
   
const logOut = () =>{
    return signOut(auth)
}
    


   const authInfo ={
    registerUser ,
    loggginUser,
    user,
    setUser,
    googleLogin,
    logOut
   
   }

   useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (currentuser) => {
        if (currentuser) {
            // console.log(currentuser)
          setUser(currentuser)
        } else {
          setUser(null)
        }
      });
      return ()=>{
        unsubscribe()
      }
},[])



    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;