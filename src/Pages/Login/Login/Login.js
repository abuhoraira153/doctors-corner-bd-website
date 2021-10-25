import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/';

    const auth = getAuth();
    const {signInUsingGoogle, signInUsingGithub} = useAuth()
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => {})
    }

    const handleRegistration = e => {
        e.preventDefault()
        // console.log(email, password)
        if(password.length < 6){
            setError("Password must be at least 6 charecters.")
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('PassWord should be 2 capital letters.');
            return;
        }
        if(!/(?=.*[!@#$&*])/.test(password)){
            setError('Password should be one special case letter.');
            return;
        }
        // if(!/(?=.*[0-9].*[0-9])/.test(password)){
        //     setError('Password should be two digits');
        //     return;
        // }
        isLogin ? processLogin(email, password):createNewUser(email, password);
      
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('')
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    const createNewUser = (email ,password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            // console.log(user)
            setError('')
            setUserName()
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className = "container">
            <h1 className = "text-primary my-5">Please {isLogin ? 'Login' : 'Register'}</h1>
            <br />
            <form onSubmit = {handleRegistration}>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input onBlur = {handleNameChange} type="text" className="form-control" id="inputName" required/>
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input onBlur = {handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input onBlur = {handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
                    </div>
                </div>
                <div className="row mb-3">
                    {/* <p className = "text-dark">New to Doctors Corner? <Link to = "/register">Create Account</Link></p> */}
                    <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                        <input onChange = {toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
                        <label className="form-check-label text-success" htmlFor="gridCheck1">
                        <h2>Already Register?</h2>
                        </label>
                    </div>
                    </div>
                </div>
                <div className = "text-danger my-4"><h3>{error}</h3></div>
                <button type="submit" className="btn btn-primary"><h3>{isLogin ? 'Login' :' Register'}</h3></button>
            </form>
            <br />
            <div>----------------------------------or--------------------------------------</div>
            <button onClick = {handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
            <br />
            <div>----------------------------------or--------------------------------------</div>
            <br />
            <button onClick = {signInUsingGithub} className="btn btn-warning">Github Sign In</button>
        </div>
    );
};

export default Login;