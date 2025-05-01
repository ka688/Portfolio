import React from "react";

import styles from "./Hero.module.css";

import profileImg from "../../assets/hero/profilepic.jpg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kaustubh Patil</h1>
        <p className={styles.description}>
          I'm a passionate Full Stack Developer skilled in React and Node.js,
          eager to apply my knowledge and grow in a professional environment.
          I'm excited to contribute to real-world projects and continue learning
          every day! Feel free to reach out!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={profileImg}
        alt="Kaustubh Patil avatar"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
