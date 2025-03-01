import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { app } from "../Firebase/firebase.config"
import useAxiosSecure from "../Hooks/useAxiosSecure"
import useAxiosOpenForAll from "../Hooks/useAxiosOpenForAll"


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure()
    const axiosOpenForAll = useAxiosOpenForAll()


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
            // console.log('currentUser',currentUser);
            if(currentUser){
              //get token and store client     
              const userInfo = {
                email: currentUser?.email,
                name: currentUser?.displayName,
              }
              axiosOpenForAll.post('/jwt', userInfo)
              .then(res => {
                  if(res.data.token){
                      localStorage.setItem('access-token', res.data.token)
                  }
              })
            }
            else {
              //TODO: remove token (if token exists)
              localStorage.removeItem('access-token');
            }
            setLoading(false)
        })
        return () => unsubscribe(); 
    }, [axiosOpenForAll])

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