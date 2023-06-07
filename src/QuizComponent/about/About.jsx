import React from 'react'
import aboutImg from '../../images/front-view-academic-cap-with-books-pencils.jpg'
import icon1 from '../../images/leader.png'
import icon2 from '../../images/online-learning.png'
import icon3 from '../../images/badge.png'
import styles from '../about/about.module.css'

export default function About() {
  return (
    <div className={styles.about_section}>
    <div className={styles.about}>
        
            <img src={aboutImg} alt="" className={styles.about_image}/>
        
        <div className={styles.about_text}>
            <h1>A Few Word About Us</h1>
                <p className={styles.about_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio nesciunt ullam magni laborum maxime aut architecto veritatis aspernatur porro?</p>
                <p className={styles.about_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis ab, excepturi iure rem reiciendis a, laboriosam corporis hic provident sapiente ea veritatis dolore expedita eveniet eum et velit itaque tenetur. Quas necessitatibus perferendis excepturi mollitia, nobis beatae placeat aliquam pariatur cumque provident perspiciatis voluptatibus eaque sequi similique labore quos architecto odio error ad enim libero iusto expedita dolores ipsa. Illo ut, dolore cumque et voluptate accusamus. Debitis, ipsa eligendi vero cumque aspernatur quis suscipit. Quasi odit accusamus quod atque.</p>
                <p className={styles.about_bold}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam?</p>
        </div>
    </div>
    <div>
        <div className={styles.about_box_container}>
            <div className={styles.about_box1}>
                <div><img src={icon1} alt="" /></div>
                <h1>Best Industry Leaders</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit maxime delectus dolorem, ducimus et accusantium!</p>
            </div>
            <div className={styles.about_box}>
            <div><img src={icon2} alt="" /></div>
                <h1>Best Industry Leaders</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit maxime delectus dolorem, ducimus et accusantium!</p>
            </div>
            <div className={styles.about_box}>
            <div><img src={icon3} alt="" /></div>
                <h1>Best Industry Leaders</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit maxime delectus dolorem, ducimus et accusantium!</p>
            </div>
        </div>
    </div>
        
    </div>
  )
}
