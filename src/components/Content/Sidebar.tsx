import React from 'react';
import styles from './Sidebar.module.css';
import { sidebarMenu } from '@/constants/sidebarMenu';

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_top}>
        <ul className={styles.sidebar_menu}>
          <h2>Gifs</h2>
          {sidebarMenu.map((nav, id) => (
            <li key={id} className={styles.sidebar_item}>{nav.title}</li>
          ))}
        </ul>
      </div>
      <div className={styles.sidebar_bottom}>
        <ul>
          <li className={styles.toggle_darkmode}>
            <img src="src/assets/brightness.png" alt="brightness" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar