import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <div className={styles.window}>
        <div className={styles.window_content}>
          <Header />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App
