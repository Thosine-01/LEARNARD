import React, {useState} from 'react'
import {AiOutlineAlignLeft, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import Logo from '../../images/Free_Sample_By_Wix-removebg-preview.png'
import styles from '../nav/nav.module.css'
import { Link } from 'react-router-dom';

export default function Nav() {
    const [mobileView, setMobileView] = useState(false)
  return (
    <div className={styles.navbar}>
        
            <img src={Logo} alt="this is the logo" className={styles.logo}/>
   
        <ul className={mobileView ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
            <li>
                <a href="home">Home</a>
            </li>
            <li>
                <a href="about">About</a>
            </li>
            <li>
                <a href="contact">Contact Us</a>
            </li>
            <li>
                <Link to="/login" className={styles.btn_login}>Login</Link>
            </li>
            <li>
                <Link to="/signUp" className={styles.btn_sign}>SignUp</Link>
                
            </li>
        </ul>
        <div onClick={() => setMobileView(!mobileView)} className={styles.mobile}>
        {mobileView ? <AiOutlineClose  size={25}/> : <AiOutlineAlignLeft size={25}/>}
        
        </div>
    </div>
    
    
  )
}
