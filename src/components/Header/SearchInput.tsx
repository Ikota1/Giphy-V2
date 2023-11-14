import React from 'react';
import { Search } from 'lucide-react';
import styles from './SearchInput.module.css';

const SearchInput: React.FC = () => {
  return (
    <div className={styles.input_search}>
      <Search />
      <input type="search" className={styles.search} placeholder="Search GIFs" id="" />
    </div>
  )
}

export default SearchInput