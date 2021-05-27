import React from 'react'
import styles from './slider.module.css'

const SliderItem = ({img, position}) => {
    return (
        <article className={styles.sliderItem}>
           <div className={styles.sliderImg}>
               <img src={img} alt="slider item img" />
           </div>
           <span className={styles.sliderPosition}>{position}</span>
        </article>
    )
}

export default SliderItem
