import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'CommunityHub-360',
      technologies: ['Java', 'Android Studio', 'React', 'HTML5 / CSS3', 'Node.js', 'MongoDB', 'Amazon EC2', 'Git'],
      highlights: [
        'Designed and architected a scalable full-stack web platform to address safety and communication gaps in residential communities, implementing a microservices-based architecture with RESTful APIs and role-based access control (RBAC) to ensure secure, seamless interactions between residents, security personnel, and administrators ',
        'Engineered and deployed the application on Amazon Web Services, leveraging services such as EC2, RDS, S3, and IAM to ensure high availability, data security, and reliable performance across multiple community networks',
        'Built CI/CD pipelines using GitHub Actions and AWS CodePipeline, reducing release cycles by 30% and improving deployment reliability',
        'Collaborated with cross-functional teams in Agile/Scrum environments, participating in sprint planning, daily stand-ups, and retrospectives to deliver incremental features efficiently and align development with community needs',
      ],
     
    },

    {
      title: 'AI-Resume Screening',
      technologies: ['Python', 'Natural Language Processing (NLP)', 'Scikit-learn', 'TF-IDF', 'Cosine Similarity', 'FastAPI', 'React', 'REST APIs', 'Git'],
      highlights: [
        'Developed an intelligent resume screening system using NLP techniques to analyze and match candidate resumes against job descriptions for automated shortlisting',
        'Implemented preprocessing pipelines including tokenization, keyword extraction, and similarity scoring to evaluate candidate-job fit accurately',
        'Built a ranking mechanism using similarity algorithms (TF-IDF / cosine similarity / embeddings) to score and prioritize candidates based on relevance',
        'Designed a full-stack solution integrating backend APIs, data processing, and user interface for uploading resumes and generating screening results in real time',
      ],
      link: 'https://github.com/Shivanichowdary24/AI-Resume-Screening.git',
    },
    {
      title: 'Mini E-Commerce Website',
      technologies: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'HTML5 / CSS3', 'Git'],
      highlights: [
        'Developed a mini e-commerce web application enabling users to browse products, view details, and simulate purchasing workflows',
        'Built an interactive frontend with dynamic rendering of product listings, cart updates, and user actions to enhance user experience.',
        'Implemented backend services/APIs to manage product data, handle requests, and ensure smooth communication between frontend and server',
        'Designed key features such as shopping cart, product filtering, and order handling, mimicking real-world online retail systems',
      ],
      link: 'https://github.com/Shivanichowdary24/Mini-ecommerce-app.git',
    },

    {
      title: 'Self-Healing Data Pipeline',
      technologies: ['Python', 'Apache Airflow', 'Docker', 'FastAPI', 'SQLite', 'Pandas', 'REST APIs', 'Git'],
      highlights: [
        'Designed and implemented a resilient data pipeline capable of detecting failures and automatically triggering recovery mechanisms, ensuring high data reliability',
        'Utilized workflow orchestration (e.g., Airflow-style pipelines) to manage task dependencies, scheduling, and automated retries for failed jobs',
        'Integrated logging and monitoring to track pipeline execution, detect anomalies, and provide actionable insights for debugging and performance optimization',
        'Developed a production-ready architecture using Docker and modular components (API, database, pipeline layers) for scalability and easy deployment',
      ],
      link: 'https://github.com/Shivanichowdary24/Self-Healing-Data-Pipeline.git',
    },

    {
      title: 'Flask App',
      technologies: ['Python', 'Flask', 'SQLite', 'REST APIs', 'HTML5 / CSS3', 'Jinja2', 'Git'],
      highlights: [
        'Developed a scalable web application using Flask, implementing RESTful APIs to handle client-server communication and dynamic data processing.',
        'Designed and integrated a backend database system for efficient data storage, retrieval, and management, ensuring optimized query performance',
        'Structured the application using a modular approach with separated components (routes, services, and configuration), improving maintainability and scalability',
        'Built a production-ready application with environment configuration, dependency management, and support for deployment using modern tools',
      ],
      link: 'https://github.com/ShivaniAtukuri/Flask-app',
    },

    {
      title: 'Weapon Detection in Real-Time CCTV',
      technologies: ['CNNs', 'YOLOv3', 'YOLOv4', 'VGG16', 'PyTorch', 'Computer Vision'],
      highlights: [
        'Developed a real-time weapon detection system for CCTV surveillance, leveraging YOLOv3/v4 and OpenCV for live video processing, enabling instant alerts and improving public safety with under 100ms detection latency',
        'Achieved 92% detection accuracy by training and fine-tuning the YOLO models on a custom dataset of weapons, while implementing techniques like non-max suppression and bounding box optimization to reduce false positives',
        'Conducted a comparative analysis of YOLO models versus VGG16 for object detection, balancing speed and accuracy to achieve real-time performance at 30 FPS suitable for live monitoring scenarios',
        'Integrated Stripe payment processing with webhook validation and transaction logging',
        'Metrics: 99.9% uptime, <200ms API response time (p95)',
      ],
      link: 'https://github.com/Shivanichowdary24/weapon-detection.git',
    },
  ];
    return (
    <>
      {/* ================= FEATURED PROJECTS ================= */}
      <section className="featured-project section-alt" id="featured">
        <h2 className="section-title">Featured Projects</h2>

        <div className="featured-container">

          {/* AI PROJECT */}
          <div className="featured-card">
            <span className="featured-badge">Featured</span>
            <h3>AI-Powered Resume Screening System</h3>
            <p className="featured-subtitle">
              Intelligent candidate shortlisting using NLP and machine learning
            </p>

            <div className="featured-content">
      <div className="featured-challenge">
        <h4>Challenge</h4>
        <p>
          Manual resume screening is time-consuming and inefficient. The goal was to 
          automate candidate evaluation by analyzing resumes and matching them with job descriptions.
        </p>
      </div>

      <div className="featured-achievements">
        <h4>Key Achievements</h4>
        <ul>
          <li>Built NLP-based system to match resumes with job descriptions</li>
          <li>Implemented TF-IDF and cosine similarity for candidate ranking</li>
          <li>Automated resume parsing and skill extraction</li>
          <li>Developed FastAPI backend with real-time scoring</li>
          <li>Created recruiter-friendly UI for uploading and ranking resumes</li>
        </ul>
      </div>
    </div>

    <div className="featured-tech">
      {[
        'Python',
        'NLP',
        'Scikit-learn',
        'TF-IDF',
        'Cosine Similarity',
        'FastAPI',
        'React',
        'REST APIs',
        'Git'
      ].map((tech, i) => (
        <span key={i} className="featured-tech-tag">{tech}</span>
      ))}
    </div>

    <a href="https://github.com/Shivanichowdary24/AI-Resume-Screening.git" target="_blank" rel="noreferrer">
      View Project
    </a>
  </div>


          {/* PIPELINE PROJECT */}
<div className="featured-card">
  <span className="featured-badge">Featured</span>
  <h3>Self-Healing Data Pipeline</h3>
  <p className="featured-subtitle">
    Fault-tolerant data pipeline with automated recovery and monitoring
  </p>

  <div className="featured-content">
    <div className="featured-challenge">
      <h4>Challenge</h4>
      <p>
        Data pipelines often fail due to system errors, network issues, or data inconsistencies, 
        leading to downtime and data loss. The challenge was to build a resilient system that can 
        automatically detect failures and recover without manual intervention.
      </p>
    </div>

    <div className="featured-achievements">
      <h4>Key Achievements</h4>
      <ul>
        <li>Designed a self-healing pipeline with automated failure detection and retry mechanisms</li>
        <li>Implemented workflow orchestration for task scheduling and dependency management</li>
        <li>Integrated logging and monitoring for real-time pipeline tracking and debugging</li>
        <li>Built modular architecture with API, database, and pipeline layers</li>
        <li>Containerized the system using Docker for scalability and deployment</li>
      </ul>
    </div>
  </div>

  <div className="featured-tech">
    {[
      'Python',
      'Apache Airflow',
      'Docker',
      'FastAPI',
      'SQLite',
      'Pandas',
      'REST APIs',
      'Git'
    ].map((tech, i) => (
      <span key={i} className="featured-tech-tag">{tech}</span>
    ))}
  </div>

  <a 
    href="https://github.com/Shivanichowdary24/Self-Healing-Data-Pipeline.git" 
    target="_blank" 
    rel="noreferrer"
  >
    View Project
  </a>
</div>

        </div>
      </section>
    
          <section className="projects section-dark" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-list">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-card-header">
                    <h3>{project.title}</h3>
                    <a
                      href={project.link || '#'}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                  <div className="project-tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>
                  <ul className="project-highlights">
                    {project.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
  
    
    
        </>
      );
    };
    
    export default Projects;
    