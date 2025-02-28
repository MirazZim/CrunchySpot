import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { app } from "../Firebase/firebase.config"


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    //---------------------------------------------//

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
   
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    
    const updateUserProfile = (name, photo) => {
        return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    //---------------------------------------------//
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('currentUser',currentUser);
            setLoading(false)
        })
        return () => unsubscribe(); 
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        updateUserProfile,
        signInWithGoogle,
        
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}  
    </AuthContext.Provider>
    
  )
}

export default AuthProvider