import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => (
  <>
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to our page!</h1>
      <p className={styles.intro}>
        The Regulation of Minister of National Education No. 41/2007 about Standard of Process
        states that the teaching and learning process should be systematically conducted through
        processes of exploration, elaboration and confirmation. Therefore, the use
        of calculator for mathematics learning should accomodate these three processes.
        Students are given
        opportunity to freely explore the calculator in solving the given problem. Students’
        strategies in solving the problem by using calculator is elaborated and confirmed through
        whole class discussion.
        The most important point in using calculator for mathematics learning in elementary school
        is that students must already understand the basic operation of numbers (i.e. addition,
        subtraction, multiplication and division). The calculator is used to develop the
        concept from
        basic number operation to other concept related to number system, such as place value and
        decimal. The calculator used in this activity is not a scientific calculator,
        but a very simple calculator
        <a href="http://staffnew.uny.ac.id/upload/132310893/penelitian/awijayalsm-xviii-2010calculatorits-controversy-and-advantages.pdf">Read More</a>
        .
        <br />
        <br />
        We were able to create oure own calculator. Welcome and lets calculate together
      </p>
    </div>
  </>
);

export default Home;
