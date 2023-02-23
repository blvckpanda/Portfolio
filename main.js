import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
  <section id="nav">
  <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link" href="#" style="color:white">HOME</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style="color:white">SKILL-SET</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style="color:white">PROJECTS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style="color:white">CONTACT</a>
  </li>
  
  </ul>
  </section>
  <div id="home">
  <p class="greeting">Hello, I'm <br>
  a Front End Developer</p>
  </div>

  </div>
  
`;

setupCounter(document.querySelector("#counter"));
