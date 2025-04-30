import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a
            href="mailto:kaustubhp948@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Kaustubh,%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch."
            target="_blank"
            rel="noopener noreferrer"
          >
            kaustubhp948@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/kaustubh-patil-4ba260244"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/kaustubh-patil
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/ka688" target="_blank" rel="noopener noreferrer">
            github.com/kaustubhp948
          </a>
        </li>
      </ul>
    </footer>
  );
};