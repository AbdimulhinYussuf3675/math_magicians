import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';

const Nav = () => (
  <nav className={styles.navBar}>
    <h1 className={styles.logo}>Math Magician</h1>
    <ul className={styles.navLinks}>
      <li className={styles.links}>
        <Link
          className={styles.link}
          to="/"
        >
          Home
        </Link>
      </li>
      <li className={styles.links}>
        <Link
          className={styles.link}
          to="/calculator"
        >
          Calculator
        </Link>
      </li>
      <li>
        <Link
          className={styles.link}
          to="/quote"
        >
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
