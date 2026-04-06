import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Full-Stack Software Development Engineer building scalable applications and intelligent systems.</h3>
         <p>
         Seasoned Software Development Engineer with <strong>4+ years</strong> of industry experience, adept in developing and optimizing web applications and distributed systems using <strong>Vue.js</strong>, <strong>React.js</strong>, and modern frontend frameworks. Proficient across multiple languages including <strong>Java</strong>, <strong>Kotlin</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, and <strong>Node.js</strong>, with strong experience across the full SDLC, STLC, and Bug Life Cycle.
</p>

<p>
Experienced in building robust automation frameworks using <strong>Selenium</strong>, <strong>Playwright</strong>, <strong>Cucumber</strong>, and <strong>Cypress</strong>, with deep expertise in <strong>Agile methodologies</strong> and test-driven development practices. Skilled in developing Java-based <strong>Microservices</strong> with <strong>Spring Boot</strong>, <strong>Auth Server</strong>, and <strong>JWT tokens</strong> for secure, scalable backend architectures.
</p>

<p>
Well-versed in <strong>CI/CD practices</strong> using <strong>Jenkins</strong>, with hands-on cloud experience across <strong>AWS Lambda</strong>, <strong>DynamoDB</strong>, <strong>EC2</strong>, and other AWS services. Demonstrates robust problem-solving and customer engagement skills, with a keen ability to assimilate new technologies and apply them for superior outcomes.
</p>


            <div className="about-details">
              <div>
                <strong>Name:</strong> Shivani Atukuri
              </div>
              <div>
                <strong>Email:</strong> shivanichow2001@gmail.com
              </div>
              <div>
                <strong>Availability:</strong> Full-time
              </div>
            </div>
            <blockquote>
              "The only way to do great work is to love what you do."
            </blockquote>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h4>4+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-box">
              <h4>3+</h4>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
