import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    ;
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = (event) =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) =>{
        setConfirmPassword(event.target.value);
    }
    if(user){
        navigate('/shop')
    }
    const handleCreateUser =(event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Sorry, Password did'nt match! ")
            return;
        }
        if(password.length <6){
            setError('Password must be at least 6 characters or long');
            return;
        }
        createUserWithEmailAndPassword(email, password)
        
        
        // event.preventDefault(); ei function ti lekkha hoy karon submit button click korle jate page load na hoy
    }
    return (
        <div className='form-container'>
            <div>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handleCreateUser}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
            </div>
            <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
            </div>
            <p style={{color:'red'}}>{error}</p>
            <input className='form-submit' type="submit" value="SignUp"/>
            </form>
            <p>
                Already have an account? <Link className='form-link' to='/login'>LogIn</Link>
            </p>
            <div className="hr-line-flex">
                <div className='hr-line'>
                    <hr />
                </div>
                <p>Or</p>
                <div className='hr-line'>
                <hr />
                </div>

            </div>
            <button className='google'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;