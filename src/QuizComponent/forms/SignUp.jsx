import React from 'react'
import styles from '../footer/footer.module.css'
import { useState } from 'react'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';


export default function SignUp() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')

    console.log(email)
    console.log(password)
    console.log(confirmPassword)

    //Validating the Passwords

    const validatePassword = () =>{
        let isValid = true

        if (password !== "" && confirmPassword !== "") {
            if (password !== confirmPassword) {
                isValid = false
                setError("Password is not valid")
            }
        }   

        return isValid
    }

    const signUp = async(e) => {
        console.log('signUp ran');
        e.preventDefault();
        //Nb: to eliminate the value from the input field i had to set the value of the input field to the state given
        //then i set the value to be empty in the submit click
        if (validatePassword()){
            
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError('');
        } else {

        }
       

        console.log(email)
        // storing the authentication data in a try and catch error container using async and await
        try{ 
            if (validatePassword()){
                createUserWithEmailAndPassword(auth,email,password)
            }
            
        } catch {
            console.log(error)
        }

        //to clear input value
        
    }

  return (
    <div>
        <form onSubmit={signUp} className={styles.formContain}>
            <div>
                <label>
                    Email
                </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label>
                    Password
                </label>
                <input type="password" onChange={(e) =>setPassword(e.target.value)} value={password}/>
            </div>
            <div>
                <label>
                    Confirm Password
                </label>
                <input type="password" onChange={(e) =>setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </div>
            

            <button type="submit" onClick={signUp}>Sign Up</button>
            <h2>Already have an account? <span> <Link to="/login" className={styles.red}>Sign In</Link> </span></h2>
            <div className={styles.red} value={error}>{error}</div>
            
        </form>
        
    </div>
  )
}
