import React from 'react';
import { navigationMenu } from '@/data/navigationMenu';
import styles from './Nav.module.css';

const Nav: React.FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_menu}>
        {
          navigationMenu.map((nav, id) => (
            <li key={id}>{nav.title}</li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav