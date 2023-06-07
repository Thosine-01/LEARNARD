import React from 'react'
import catImg1 from '../../images/experiments-chemistry-lab-conducting-experiment-laboratory.jpg'
import styles from '../categories/categories.module.css'

export default function Categories() {
  return (
    <div className={styles.categories_section}>
        <div className={styles.categories}>
            <div className={styles.categories_header}>
                <h1>Start exploring industry questions irrespective of your field</h1>
            </div>
            <div className={styles.categories_grid_container}>
                <div className={styles.categories_box}>
                    <img src={catImg1} alt="" className={styles.catImg}/>
                    <div className={styles.categories_box_header}>Science Quizes</div>
                    <div className={styles.categories_box_p}>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officia consectetur eligendi nulla, corporis, assumenda aperiam, illum praesentium error molestias sed deserunt ut numquam animi!</p>
                    </div>

                </div>
                <div className={styles.categories_box}>
                <img src={catImg1} alt="" className={styles.catImg}/>
                    <div className={styles.categories_box_header}>Art Quizes</div>
                    <div className={styles.categories_box_p}>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officia consectetur eligendi nulla, corporis, assumenda aperiam, illum praesentium error molestias sed deserunt ut numquam animi!</p>
                    </div>

                </div>
                <div className={styles.categories_box}>
                <img src={catImg1} alt="" className={styles.catImg}/>
                    <div className={styles.categories_box_header}>Commer Quizes</div>
                    <div className={styles.categories_box_p}>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officia consectetur eligendi nulla, corporis, assumenda aperiam, illum praesentium error molestias sed deserunt ut numquam animi!</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}
