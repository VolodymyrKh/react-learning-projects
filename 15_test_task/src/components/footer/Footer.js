import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <p className={styles.footerContent}>
          ©2019 Icaria Health. All rights reserved.
        </p>
      </footer>
    );
}

export default Footer
