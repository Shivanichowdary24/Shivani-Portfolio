import React from 'react';
import '../styles/Certifications.css';

// Import images (MATCHES your Assets folder exactly)
import JavaCert from '../Assets/c1.jpg';
import ReactCert from '../Assets/c2.jpg';
import SQLCert from '../Assets/c3.jpg';
import RestAPICert from '../Assets/c4.jpg';
import PythonCert from '../Assets/c5.jpg';
import IntroGenAICert from '../Assets/intro-genAI.jpg';
import IntroLLMCert from '../Assets/intro-LLM.jpg';
import IntroAIMCert from '../Assets/intro-AI.jpg';

const certifications = [
  {
    title: 'JavaScript (Basic)',
    issuer: 'HackerRank',
    file: JavaCert
  },
  {
    title: 'React (Basic)',
    issuer: 'HackerRank',
    file: ReactCert
  },
  {
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    file: SQLCert
  },
  {
    title: 'REST API (Intermediate)',
    issuer: 'HackerRank',
    file: RestAPICert
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    file: PythonCert
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    file: IntroGenAICert
  },
  {
    title: 'Introduction to Large Language Models',
    issuer: 'Google Cloud',
    file: IntroLLMCert
  },
  {
    title: 'Introduction to Responsible AI',
    issuer: 'Google Cloud',
    file: IntroAIMCert
  }
];

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <h2 className="section-title">CERTIFICATIONS</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <h3>{cert.title}</h3>
              <p><strong>Issuer:</strong> {cert.issuer}</p>

              <div className="cert-media">
                <img 
                  src={cert.file} 
                  alt={cert.title} 
                  className="cert-image" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;