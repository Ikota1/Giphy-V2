import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo_wrapper}>
      <img src="src/assets/images/logo_blacktext.png" className={styles.logo} alt="logo" />
    </div>
  )
}

export default Logo