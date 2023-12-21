import { NavLink } from 'react-router-dom';
import { navigationMenu } from './__header_nav_mock_data__';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_menu}>
        {navigationMenu.map(({ id, title, link }) => (
          <NavLink key={id} to={link}>
            <li>{title}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
