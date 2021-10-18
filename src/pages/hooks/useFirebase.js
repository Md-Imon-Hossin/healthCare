import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup   } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    // UseState 
    const [name,setName] = useState({})
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin,setIsLogin] = useState(false)
    const [isLoading,setIsLoading] = useState(true)
    // Auth
    const auth = getAuth();
    // SignIn Using Google 
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
            setUser(result.user)
            })
            .catch(error => {
            setError(error.message)
            })
    }
    // Form Registration 
    const handleRegistration = e => {
        e.preventDefault()
        console.log(email, password)
        if (password.length < 6) {
            setError('Password Should be at least 6 characters')
            return
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must Contain 2 Uppercase')
            return 
        }
        isLogin ?processLogin(email,password) : registrationNewUser(email,password)
    }
    // Registration New User
    const registrationNewUser = (email, password)=>{
          createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                setUserName()
        })
            .catch(error => {
            setError(error.message)
        })
    }
    // Set User Name 
    const setUserName = () => {
        updateProfile(auth.currentUser,{
            displayName : name
        })
        .then(result=>{})
    }
    // Process Login
    const processLogin = (email,password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
                setError('')
            })
            .catch(error => {
            setError(error.message)
            })
            .finally(()=>setIsLoading(false))
    }
    // Logout 
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(()=>setIsLoading(false))
    }
    // Observe user state changed 
    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
           }
           setIsLoading(false)
       })
        return  ()=> unsubscribed 
    },[])
    // Handle Name Change
    const handleNameChange = e => {
        setName(e.target.value)
    }
    // Handle Email Change
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    // Handle Password Change
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    // ToggleLogin 
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    // Return 
    return {
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error,
        toggleLogin,
        isLogin,
        user,
        handleNameChange,
        setUserName,
        logout,
        isLoading,
        signInUsingGoogle,
    }
}
export default useFirebase;