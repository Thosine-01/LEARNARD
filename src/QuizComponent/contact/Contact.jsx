import React from 'react'
import {AiTwotonePhone,AiTwotoneMail,AiTwotoneEnvironment } from 'react-icons/ai'
import styles from '../contact/contact.module.css'
import contactImage from '../../images/woman-hands-using-phone-laptop.jpg'

export default function Contact() {
  return (
    <div className={styles.contactHero}>
       <div className={styles.contactHeader}>
            <h2 className={styles.contactH2}>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet quibusdam doloremque, perferendis vel nesciunt consequatur tenetur repudiandae qui nemo numquam facilis reprehenderit, eaque mollitia?</p>
       </div> 
       <div className={styles.contactFlex}>
        <div className={styles.contactFlex1}>
            <div>
                <AiTwotoneEnvironment size={35} className={styles.contactIcons}/>
                <h3>Address</h3>
                <p>45 Sugar Cane Road Apupugbem Cresent</p>
            </div>
            <div>
                <AiTwotonePhone size={35} className={styles.contactIcons}/>
                <h3>Phone</h3>
                <p>+234 90 661 224 41</p>
            </div>
            <div>
                <AiTwotoneMail size={35} className={styles.contactIcons}/>
                <h3>Email</h3>
                <p>toluwanigbemi01@gmail.com</p>
            </div>
        </div>
        <div className={styles.contactFlex2}>
            <h2>Send Message</h2>
            <form className={styles.contactForm}>
                <input type="text" placeholder='Full Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Type your Message'/>
                <button className={styles.contactSubmit}>Send</button>
            </form>
        </div>
       </div>
    </div>
  )
}
