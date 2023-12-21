import Header from './components/Header/Header';
import styles from './App.module.css';
import Sidebar from './components/MainContent/Sidebar';
import { Home } from './pages/Home';
import { AppRouter } from './components/AppRouter';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.Content}>
        <Sidebar />
        {<Home /> && <AppRouter />}
      </div>
    </div>

  )
}

export default App
