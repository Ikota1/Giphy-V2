import styles from './Header.module.css';
import Logo from './Logo';
import SearchInput from './SearchInput';
import Nav from './Nav';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <Logo />
        </div>
        <div className={styles.header_logo_input}>
          <SearchInput />
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
