import React from 'react'
import communityImg from '../../images/study-group-african-people (2).jpg'
import mentor1 from '../../images/portrait-handsome-looking-man.jpg'
import mentor2 from '../../images/serious-afroamerican-businessman-portrait.jpg'
import mentor3 from '../../images/woman-with-curly-hair-posing.jpg'
import styles from '../community/community.module.css'
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Community() {
  return (
    <div className={styles.community_section}>
       <div className={styles.community_container}>
          <div className={styles.community_cover_post}>
            <img src={communityImg} alt="" className={styles.community_img}/>
            <h1>Lorem ipsum dolor sit ame.</h1>
            <p>Lorem ipsum dolor sit amet consectetur repellendus sunt . Laudantium, sint temporibus?</p>
            <Link to="/signUp" className={styles.btn_sign}>SignUp</Link>
          </div>
          <div className={styles.community_numbers}>
            <div className={styles.community_flex_item}>
              <h1>3.999</h1>
              <h2>Satisfied Student</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. odio at natus?</p>
            </div>
            <div className={styles.community_flex_item}>
              <h1>16</h1>
              <h2>Available Subjects</h2>
              <p>Lorem ipsum dolorsaepe placeat accusamus consequatur odio at natus?</p>
            </div>
            <div className={styles.community_flex_item}>
              <h1>14000</h1>
              <h2>Graduates</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.tomi et el odio at natus?</p>
            </div>
            <div className={styles.community_flex_item}>
              <h1>9</h1>
              <h2>Teachers</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  facere saepe placeatnatus?</p>
            </div>
          </div>
       </div>
       <div className={styles.community_mentor}>
            <div className={styles.community_mentor_header}>
            Meet Our Best Mentors
            </div>
            <div className={styles.community_mentor_profile_contain}>
              <div className={styles.community_mentor_profile}>
                <img src={mentor1} alt="" className={styles.mentor}/>
                <h1>Lawal Tomi</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum fugit nihil voluptatem sequi numquam voluptatibus officiis, aperiam delectus quis. Consequuntur.</p>
                  <div className={styles.community_mentor_icon}>
                    <a href=""><FaLinkedin size={25}/></a>
                    <a href=""><FaFacebookSquare size={25}/></a>
                    <a href=""><FaTwitterSquare size={25}/></a>
                  </div>
              </div>
              <div className={styles.community_mentor_profile}>
                <img src={mentor2} alt="" className={styles.mentor}/>
                <h1>Richard Olawale</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum fugit nihil voluptatem sequi numquam voluptatibus officiis, aperiam delectus quis. Consequuntur. </p>
                <div className={styles.community_mentor_icon}>
                  <a href=""><FaLinkedin size={25}/></a>
                  <a href=""><FaFacebookSquare size={25}/></a>
                  <a href=""><FaTwitterSquare size={25}/></a>
                </div>
              </div>
              <div className={styles.community_mentor_profile}>
                <img src={mentor3} alt="" className={styles.mentor}/>
                <h1>Jima Bosunic</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum fugit nihil voluptatem sequi numquam voluptatibus officiis, aperiam delectus quis. Consequuntur. </p>
                <div className={styles.community_mentor_icon}>
                  <a href="" className={styles.iconlink}><FaLinkedin size={25}/></a>
                  <a href=""><FaFacebookSquare size={25}/></a>
                  <a href=""><FaTwitterSquare size={25}/></a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.community_testimonials}>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
      ...
          </Swiper>
          </div>

    </div>
  )
}
