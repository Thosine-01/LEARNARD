import React from 'react'
import styles from '../hero/hero.module.css'
import hero_img from '../../images/study-group-african-people (2).jpg'


export default function Hero() {
  return (
    <div className={styles.hero} style = {{backgroundImage: `url(${hero_img})`,
      backgroundRepeate: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '100% 100%'
    }}>
      <div className={styles.hero_container}>
        <div className={styles.hero_text}>
            <h1>Easy, Comprehensive and Intuitive Online Quiz</h1>
            <p>Learnard is a cloud testing platform that text student ranging from waec to jamb and freshman and prepare them for their exams</p>
            <div className={styles.hero_btn}>
              <a href="login" className={styles.btn_login}>Login</a>
              <a href="sign" className={styles.btn_sign}>Try Out</a>
            </div>
        </div>
      </div>
      
    </div>
  )
}
