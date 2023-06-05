import React, {useState} from 'react'
import {AiOutlineAlignLeft, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import Logo from '../../images/choicetransport-removebg-preview.png'
import styles from '../nav/nav.module.css'

export default function Nav() {
    const [mobileView, setMobileView] = useState(false)
  return (
    <div className={styles.navbar}>
        
            <img src={Logo} alt="this is the logo" className={styles.logo}/>
   
        <ul className={mobileView ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
            <li>
                <a href="Learn more">Learn more</a>
            </li>
            <li>
                <a href="Sign up">Sign Up</a>
            </li>
            <li>
                <a href="Log in">Log in</a>
            </li>
            <li>
                < AiOutlineSearch size={25}/>
            </li>
            <li>
                <AiOutlineUser size={25}/>
            </li>
        </ul>
        <div onClick={() => setMobileView(!mobileView)} className={styles.mobile}>
        {mobileView ? <AiOutlineClose  size={25}/> : <AiOutlineAlignLeft size={25}/>}
        
        </div>
    </div>
    
    
  )
}
