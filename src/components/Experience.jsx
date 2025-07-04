/* eslint-disable react/prop-types */
export const Experience = ({ experienceRef }) => {
  const experiences = [
    {
      company: 'The Home Depot',
      period: 'August 2024 – Present',
      position: 'Senior Software Engineer',
      responsibilities: [
        'System Architecture: Participated in the design of scalable system architectures using React, Node.js, Docker, and GitHub Actions, promoting maintainability, performance, and collaboration across teams.',
        'Front-End Development: Led development of responsive, accessible interfaces with React, using Figma to interpret and implement user interface designs, resulting in improved customer engagement and application usability.',
        'API Development: Designed and integrated RESTful APIs for real-time communication between front-end and back-end services.',
        'CI/CD & DevOps: Implemented CI/CD pipelines to automate code validation and deployments across QA, staging, and production environments.',
        'Deployment & Release Management: Managed deployment strategies to ensure consistent and reliable releases.',
        'Testing & QA: Established robust test automation with Jest and Playwright, reducing production bugs and increasing system reliability.',
      ],
    },
    {
      company: 'The Cigna Group',
      period: 'May 2022 – August 2024',
      position: 'FullStack Developer',
      responsibilities: [
        'Working as a React Developer for a US-based client, focusing on component-based architecture, modern hooks (e.g., useState, useEffect, useContext), and functional components.',
        'Collaborated with the design team to implement pixel-perfect UIs and deliver intuitive, user-centered experiences.',
        'Utilized Redux for scalable and maintainable state management across complex application flows.',
        'Implemented dynamic routing with React Router DOM to enhance navigation and performance.',
        'Integrated RESTful APIs using Axios and Fetch, enabling efficient asynchronous data operations.',
      ],
    },
    {
      company: 'Tata Consultancy Services',
      period: 'September 2020 – May 2022',
      position: 'Front-End Developer',
      responsibilities: [
        'Delivered new features, resolved bugs, and conducted unit testing using HTML, CSS, JavaScript, React, Redux, and Enzyme.',
        'Refactored and optimized legacy code, aligning it with modern frontend standards and best practices.',
        'Contributed to multiple US-based projects, collaborating with cross-functional teams in an agile environment.',
      ],
    },
  ];

  return (
    <section ref={experienceRef} className="experience">
      <h2>Experience</h2>
      <hr />
      {experiences.map((job, index) => (
        <article key={index}>
          <h3>
            {job.company} <span>|</span> {job.period}
          </h3>
          <h4 className="job_title">{job.position}</h4>
          <ul>
            {job.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};
