import { Fragment } from 'react';
import styles from './Layout.module.css';

const Layout = ({ children, darkModeData }) => {
  let theme;
  darkModeData ? (theme = 'dark-mode') : (theme = 'light-mode');

  return (
    <Fragment>
      <main className={theme}>
        <div className={styles['main-container']}>{children}</div>
      </main>
      ;
    </Fragment>
  );
};

export default Layout;
