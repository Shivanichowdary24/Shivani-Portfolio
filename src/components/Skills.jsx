import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Kotlin', 'Python', 'C#', 'C/C++', 'SQL']
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Bootstrap', 'Vue.js', 'React.js']
    },
    {
      title: 'Development Methodologies',
      skills: ['Agile', 'Waterfall', 'SDLC']
    },
    {
      title: 'Frameworks',
      skills: ['Spring MVC', 'Angular', 'ASP.NET', 'Spring Boot', 'Microservices']
    },
    {
      title: 'Databases & Storage',
      skills: ['MySQL', 'NoSQL', 'Amazon RDS', 'DynamoDB', 'Elasticsearch', 'MongoDB']
    },
    {
      title: 'Cloud and Containerization',
      skills: ['AWS EC2', 'ECS', 'S3', 'Lambda', 'API Gateway', 'Docker', 'Kubernetes']
    },
    {
      title: 'Source Control and Testing',
      skills: ['Git', 'GitHub', 'Selenium IDE']
    },
    {
      title: 'Computer Science Fundamentals',
      skills: ['Data Structures', 'Algorithms']
    },
    {
      title: 'Other Skills',
      skills: ['Manual Testing', 'Bash scripting', 'Node.js', 'Azure development']
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">TECHNICAL SKILLS</h2>
      <blockquote>"Mastering tools that transform ideas into scalable solutions"</blockquote>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.title}</h3>
            <div className="skills-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
