import React from 'react';
import styles from './services.module.css'

const ServicesItem = ({title, content, img}) => {
    return (
      <article className={styles.item}>
        <div className={styles.itemImage}>
          <img src={img} alt="item img" />
        </div>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p>
          {content}
        </p>
      </article>
    );
}

export default ServicesItem;
