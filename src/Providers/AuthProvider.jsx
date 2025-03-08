import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import useAxiosOpenForAll from "../Hooks/useAxiosOpenForAll";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosOpenForAll = useAxiosOpenForAll(); // ✅ Keep only this, remove useAxiosSecure

  //---------------------------------------------//

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth).then(() => {
      localStorage.removeItem("access-token"); // ✅ Ensure token is removed after logout
    });
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //---------------------------------------------//
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // Get token and store it
        const userInfo = {
          email: currentUser?.email,
          name: currentUser?.displayName,
        };

        axiosOpenForAll
          .post("/jwt", userInfo)
          .then((res) => {
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.error("JWT Token fetch failed", error);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false); // ✅ Ensure token is removed on logout
      }
      
    });

    return () => unsubscribe();
  }, [axiosOpenForAll]);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    updateUserProfile,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
