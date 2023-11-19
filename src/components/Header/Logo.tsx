import React from 'react';
import styles from './Logo.module.css';

const Logo: React.FunctionComponent = () => {
  return (
    <div className={styles.logo_wrapper}>
      <img src="src/assets/images/logo_blacktext.png" className={styles.logo} alt="logo" />
    </div>
  )
}

export default Logo