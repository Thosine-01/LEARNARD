import React from 'react'
import styles from '../hero/hero.module.css'
import hero_background from '../../images/study-group-african-people (2).jpg'


export default function Hero() {
  return (
    <div className={styles.hero} style = {{backgroundImage: `url(${hero_background})`,
      backgroundRepeate: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '100% 100%'
    }}>
      <div className={styles.hero_container}>
        <div className={styles.hero_text}>
            <h1 className={styles.hero_header}>Develop Your Mind and keep <span>IQ</span> up to date with Quizes</h1>
            <h4 className={styles.hero_h4}>More than 20000 questions to feast on</h4>
            <p className={styles.hero_p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nisi pariatur iure, fugiat modi atque exercitationem explicabo hic eaque sunt!</p>
            <div className={styles.hero_btn}>
              <a href="login" className={styles.btn_login}>Login</a>
              <a href="sign" className={styles.btn_sign}>Try Out</a>
            </div>
        </div>
      </div>
      
      
    </div>
  )
}
