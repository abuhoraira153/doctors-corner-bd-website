import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import {useState, useEffect} from 'react'
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true)

    const auth = getAuth();

    
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider)
       
        // .finally(()=> setIsLoading(false))

    }
    const signInUsingGithub = () => {
        setIsLoading(true)
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth,githubProvider)
        .then(result => {
            setUser(result.user)
        })
        .finally(()=> setIsLoading(false))

    }

    useEffect(() =>{
       const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    },[])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        signInUsingGithub,
        logOut
    }
}
export default useFirebase;