import styles from './Sidebar.module.css';
import { sidebarMenu } from './__mainContent_sidebar_data__';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_top}>
        <ul className={styles.sidebar_menu}>
          <h2>Gifs</h2>
          {sidebarMenu.map(({ id, title }) => (
            <li key={id} className={styles.sidebar_item}>
              {title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.sidebar_bottom}>
        <ul>
          <li className={styles.toggle_darkmode}>
            <img src='src/assets/brightness.png' alt='brightness' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
