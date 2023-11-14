import React from 'react';
import styles from './Content.module.css';
import Sidebar from './Sidebar';


const Content: React.FunctionComponent = () => {
  return (
    <section className={styles.Hero}>
      <Sidebar />
      <div className={styles.content}>Main Content</div>
    </section>
  )
}

export default Content;