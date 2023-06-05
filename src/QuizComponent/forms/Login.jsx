import React from 'react'
import {FaUser} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import styles from '../footer/footer.module.css'
import { useState } from 'react'
import {auth} from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const login = async() => {
        try{
            await signInWithEmailAndPassword(auth,email,password)
        }catch {
            console.log('error')
        }
    }

  return (
    <div className={styles.Login}>
        <form className={styles.formContain} onSubmit={login}>
            <div>
                <label>
                    <FaUser />
                    Email
                </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label>
                    <RiLockPasswordFill />
                    Password
                </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                
            </div>
            <div>
                <input type="checkbox" />
                <label htmlFor="">Remember me</label>
            </div>

            <button type='submit'>Login</button>
            
        </form>
    </div>
  )
}
