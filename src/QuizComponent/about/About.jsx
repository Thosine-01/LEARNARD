import React from 'react'
import aboutImg from '../../images/aboutimg.avif'
import MaleInstruct from '../../images/handsome-young-businessman-suit.jpg'
import FemaleInstruct from '../../images/businesswoman-executive-professional-success-concept.jpg'
import styles from '../about/about.module.css'

export default function About() {
  return (
    <div className={styles.about}>
        <div className={styles.about_imagecontainer}>
            <img src={aboutImg} alt="" className={styles.about_image}/>
        </div>
        <div className={styles.about_text}>
            <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio nesciunt ullam magni laborum maxime aut architecto veritatis aspernatur porro?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, unde dignissimos sunt incidunt repellat nulla dolor dolorem magni ut obcaecati nobis, perspiciatis dicta accusamus non porro, aliquam repudiandae recusandae facilis vitae velit? Iure, quasi suscipit!</p>
                <p className={styles.about_bold}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam?</p>
                <div className={styles.about_flex}>
                    <div className={styles.about_imageContainer}>
                        <img src={MaleInstruct} alt="" className={styles.aboutInstuctImg}/>
                        <div className={styles.aboutflexText}>
                            <h3>Lawal Thomson</h3>
                            <p>Lead Insturctor</p>
                        </div>
                    </div>
                    <div className={styles.about_imageContainer}>
                        <img src={FemaleInstruct} alt="" className={styles.aboutInstuctImg}/>
                        <div className={styles.aboutflexText}>
                            <h3>Funmi Alade</h3>
                            <p>Lead Insturctor</p>
                        </div>
                    </div>
                    
                </div>
        </div>
    </div>
  )
}
