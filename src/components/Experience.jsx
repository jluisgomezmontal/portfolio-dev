/* eslint-disable react/prop-types */
export const Experience = ({ experienceRef }) => {
  return (
    <div ref={experienceRef} className="experience">
      <br />
      <br />
      <h2>Experience</h2>
      <hr />
      <h3>
        AgileThought <span>|</span> May 2022 - Present
      </h3>
      <h4 className="job_title">React Developer</h4>
      <ul>
        <li>
          I work for a client in the United States as a React developer, I have
          extensive knowledge of React, including component-based development,
          JSX syntax, state management, props, lifecycle methods, hooks (such as
          useState, useEffect, useContext), and functional components.
        </li>
        <li>
          Collaborated with the design team to implement pixel-perfect UI
          designs and ensure a good user experience.
        </li>
        <li>
          Implemented state management using Redux, effectively managing complex
          application states and enabling efficient data flow between
          components.
        </li>
        <li>
          Utilized React Router DOM for client-side routing, enabling dynamic
          navigation and improving overall application performance. Integrated
          with RESTful APIs to fetch and update data, utilizing libraries like
          Axios or Fetch to handle asynchronous data operations.
        </li>
        <li>
          Integrated with RESTful APIs to fetch and update data, utilizing
          libraries like Axios or Fetch to handle asynchronous data operations.
        </li>
      </ul>
      <h3>
        Tata Consultancy Services <span>|</span> september 2020 - may 2022
      </h3>
      <h4>Front End Developer</h4>
      <ul>
        <li>
          I was responsible for developing customer requirements, creating new
          features, fixing bugs and unit testing application components.( HTML,
          CSS, Javascript, React, Redux, Enzyme).
        </li>
        <li>
          Create new features and components, also optimize legacy code, keeping
          in mind the new standards in the software industry.
        </li>
        <li>
          I worked for different clients in the United States as a Frontend
          Developer.
        </li>
      </ul>
    </div>
  );
};
