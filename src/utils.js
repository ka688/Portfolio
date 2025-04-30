import html from "./assets/skills/html.png";
import css from "./assets/skills/css.png";
import react from "./assets/skills/react.png";
import node from "./assets/skills/node.png";
import Javsdcript from "./assets/skills/js2.png";
import mongodb from "./assets/skills/mongodb.png";
import figma from "./assets/skills/figma.png";
import google from "./assets/history/google.png";
import mirosoft from "./assets/history/microsoft.png";
import netflix from "./assets/history/netflix.png";
import project1 from "./assets/projects/project.png";
import project2 from "./assets/contact/emailIcon.png";
import project3 from "./assets/contact/githubIcon.png";  
import project4 from "./assets/contact/linkedinIcon.png";


const images = {
  "skills/html.png": html,
  "skills/css.png": css,
  "skills/react.png": react,
  "skills/node.png": node,
  "skills/js2.png": Javsdcript,
  "skills/mongodb.png": mongodb,
  // "skills/figma.png": figma,
  "companies/google.png": google,
  "companies/mirosoft.png": mirosoft,
  "companies/netflix.png": netflix,
  "projects/project.png": project1,
  "contact/emailIcon.png": project2,
  "contact/githubIcon.png": project3,
  "contact/linkedinIcon.png": project4,
};

export const getImageUrl = (path) => {
  return images[path] || "";
};