import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Content />
    </div>
  )
}

export default App
