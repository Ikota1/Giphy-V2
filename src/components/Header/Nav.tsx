import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

type NavigationMenu = {
  id: number,
  title: string,
  link: string,
}

export const navigationMenu: NavigationMenu[] = [
  {
    id: 1,
    title: 'Log in',
    link: '/login'
  },
  {
    id: 2,
    title: 'Upload Gif',
    link: '/upload'
  },
  {
    id: 3,
    title: 'View Uploads',
    link: '/uploads'
  },
  {
    id: 4,
    title: 'About Us',
    link: '/about'
  }
]

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_menu}>
        {
          navigationMenu.map(({ id, title, link }) => (
            <NavLink key={id} to={link}>
              <li>{title}</li>
            </NavLink>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav