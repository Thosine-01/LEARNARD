import React from 'react'
import styles from '../hero/hero.module.css'
import {AiOutlineAlignLeft, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'

export default function Hero() {
  return (
    <div  className={styles.hero}>
        <form action="" className={styles.form}>
            < div className={styles.text}>
                <label> Where</label>
                <input className={styles.text_input} type="text" name="" id="" placeholder='Search Location'/>
            </div>
            < div className={styles.from}>
                <span className={styles.border}></span>
                <label>From</label>
                <input type="date" name="" id="" />
            </div>
            < div className={styles.until}>
                <span className={styles.border}></span>
                <label>until</label>
                <input type="date" name="" id="" />
            </div>
            < div className={styles.search}>
                    <AiOutlineSearch className={styles.search_icon}/>
                    <button className={styles.search_btn}>Search For Cars</button>
            </div>
        </form>
    </div>
  )
}