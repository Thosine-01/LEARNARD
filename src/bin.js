<div>
                <label>
                    First Name
                </label>
                <input type="text" onChange={(e) => {setFirstName(e.target.value)}}/>
            </div>
            <div>
                <label>
                    Last Name
                </label>
                <input type="text" onChange={(e) => {setLastName(e.target.value)}}/>
            </div>
            <div></div>

            <div>
                <input type="checkbox" />
                <label htmlFor="">I Agree with the <span className={styles.red}>Privacy</span> and <span className={styles.red}>Policy</span></label>
            </div>

<div>
<label>
    <RiLockPasswordFill />
    Confirm Password
</label>
<input type="password" />

</div>

{/*const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email, password)
        }catch (e){
            setError(e.message)
            console.log(e.message)
        }
    }*/}

    {/*<Nav />
      <Hero />
      <About />
      <Contact />
      <Footer />
  <Login />*/}


  import React from 'react'
//import {RiLockPasswordFill} from 'react-icons/ri'
import styles from '../footer/footer.module.css'
import { useState } from 'react'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function SignUp() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const signUp = async() => {
        try{
            await createUserWithEmailAndPassword(auth,email,password,);
        }catch {
            console.log('err')
        }
    }


    console.log(email)
    console.log(password)
  return (
    <div>
        <div className={styles.formContain}>
            <div>
                <label>
                    Email
                </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>
                    
                    Password
                </label>
                <input type="password" onChange={(e) =>setPassword(e.target.value)}/>
                
            </div>
            

            <button onClick={signUp}>Sign Up</button>
            
        </div>
    </div>
  )
}
