import React from 'react';
import styles from '../styles/Quotes.module.css';

const Quotes = () => (
  <>
    <section className={styles.quoteContainer}>
      <p className={styles.quoteText}>
        One of the most amazing things about mathematics is the people who do math
        arent usually interested in application, because mathematics itself is
        truly a beautiful art form. Its structures and patterns, and thats what
        we love, and thats what we get off on.
        <br />
        <br />
        <p className={styles.quoteOwner}>~ Danica McKellar</p>
      </p>
    </section>
  </>
);

export default Quotes;
