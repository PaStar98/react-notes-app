import { MdSearch } from 'react-icons/md';
import styles from './Search.module.css';

const Search = ({ handleSearchNote }) => {
  return (
    <div className={styles.search}>
      <MdSearch className={styles['search-icon']} size={'1.3em'} />
      <input
        type="text"
        placeholder={'Type to search...'}
        onChange={e => handleSearchNote(e.target.value)}
      />
    </div>
  );
};

export default Search;
