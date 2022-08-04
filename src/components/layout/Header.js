import Search from '../UI/Search';
import styles from './Header.module.css';

const Header = ({ handleSearchNote, handleToggleDarkMode }) => {
  return (
    <header>
      <div className={styles.header}>
        <h1>Notes</h1>
        <button
          className={'btn'}
          onClick={() => handleToggleDarkMode(prevState => !prevState)}
        >
          Toggle Mode
        </button>
      </div>
      <Search handleSearchNote={handleSearchNote} />
    </header>
  );
};

export default Header;
