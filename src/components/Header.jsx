/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import Imagen from "../assets/media/jluis.png";

export const Header = ({ headerRef }) => {
  return (
    <div ref={headerRef} id="about">
      <br />
      <br />
      <div className=" header">
        <img src={Imagen} alt="mi foto" />
        <div>
          <h2>About</h2>
          <p>
            Software Engineer with 5 years of professional experience in dynamic, multicultural environments. Passionate about continuous learning and emerging technologies. Proven track record designing and developing scalable applications, with hands-on experience in modern frameworks and tools like React, Node.js, Express, and Redux. Skilled in Agile methodologies and collaborative team environments. Consistently deliver high-quality software solutions on time and within budget, aligning with business goals and client expectations.
          </p>
          <a
            target="_blank"
            without
            rel="noreferrer"
            href="https://drive.google.com/file/d/1SddtHKyiorQkceT1IHClC68XobObmgKj/view?usp=sharing"
          >
            Download C.V.
          </a>
        </div>
      </div>
    </div>
  );
};
