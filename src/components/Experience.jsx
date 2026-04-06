import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-item">
            <h3>Software Development Engineer</h3>
            <h4>Walgreens | Jan 2024 – Present</h4>
            <div className="tags">
            <span>Java</span><span>Scala</span><span>JavaScript</span><span>TypeScript</span><span>Python</span><span>SQL</span><span>React.js</span><span>Vue.js</span><span>Spring Boot</span><span>Node.js</span><span>REST APIs</span><span>Microservices</span><span>OAuth2</span><span>JWT</span><span>AWS Lambda</span><span>AWS SES</span><span>AWS SNS</span><span>AWS SageMaker</span><span>AWS RDS</span><span>DynamoDB</span><span>CloudFront</span><span>EC2</span><span>Docker</span><span>Kubernetes</span><span>Jenkins</span><span>GitHub Actions</span><span>CI/CD</span><span>MySQL</span><span>Oracle</span><span>Elasticsearch</span><span>NoSQL</span><span>Selenium</span><span>Playwright</span><span>Cucumber</span><span>Cypress</span><span>JUnit</span><span>Mockito</span><span>Grafana</span><span>Prometheus</span><span>ELK Stack</span><span>SageMaker</span><span>Agile</span><span>Scrum</span>
            </div>
            <ul className="highlights">
              <li>Built self-service Developer Portal for NY State agencies using Angular, Spring Boot, and Oracle DB, enabling identity verification onboarding via a guided wizard workflow</li>
              <li>Built full-stack password management app for NY.GOV ID IAM platform (20M+ users) using Angular, Spring Boot, OAuth 2.0/SAML, and LDAP, reducing verification time by 40%</li>
              <li>Developed Flask-based bulk upload automation with DAWS/SOAP integration and PostgreSQL, cutting user provisioning time by 85%</li>
              <li>Engineered Tier 0 IAM infrastructure using Red Hat Directory Server and IBM WebSphere microservices, achieving 90% uptime across all NY.GOV ID systems</li>
              <li>Containerized and shipped applications to OpenShift using Docker, Helm, and GitLab CI/CD, integrating SonarQube, OWASP ZAP, and Elastic APM</li>
            </ul>
          </div>

          <div className="experience-item">
          <h3>Software Engineer</h3>
          <h4>John Deere | June 2021 – July 2023</h4>
          <div className="tags">
          <span>Java</span>
<span>Spring Boot</span>
<span>REST APIs</span>
<span>OAuth2</span>
<span>JWT</span>
<span>HMAC</span>
<span>AngularJS</span>
<span>Google Cloud Platform (GCP)</span>
<span>Cloud SQL (MySQL/PostgreSQL)</span>
<span>Pub/Sub</span>
<span>BigQuery</span>
<span>Google Kubernetes Engine (GKE)</span>
<span>Docker</span>
<span>Jenkins</span>
<span>Cloud Monitoring & Logging</span>
<span>Secrets Manager</span>
<span>Git</span>
<span>Linux</span>
          </div>
          <ul className="highlights">
            <li>Architected and developed scalable payment microservices in Java/Spring Boot handling checkout, capture, refunds, and settlements with idempotency, retry logic, and high transaction reliability</li>
            <li>Integrated external payment gateways and banking partners via secure signed REST webhooks (HMAC verification), implementing exponential backoff and dead-letter queues for resilient failure handling</li>
            <li>Designed and optimized a high-volume transaction ledger in Cloud SQL (MySQL/Postgres) and built GCP Pub/Sub–based reconciliation pipelines to ensure consistent balances and automated mismatch detection%</li>
            <li>Published real-time payment events to Google Pub/Sub and built BigQuery analytics pipelines delivering dashboards on success rates, latency, chargebacks, and aging balances for finance insights</li>
            <li>Containerized services with Docker and deployed on GKE, implementing CI/CD pipelines in Jenkins with automated testing, environment-based deployments, rollback strategies, and production monitoring</li>
            <li>Strengthened payment security and reliability using OAuth2/JWT, tokenization, GCP Secrets Manager, Cloud Monitoring dashboards, and on-call incident response to reduce recovery time</li>
          </ul>
        </div>

        


        <h2 className="section-title">Education</h2>

        <div className="experience-item">
          <h3>Master of Science in Computer Science - AI/ML</h3>
          <h4>State University of New York, University at Albany, SUNY | August 2023 – May 2025</h4>
         <p>Specialized in programming, problem solving, and system design.</p>
<div className="tags">
  <span>Operating Systems</span>
  <span>Adv. Computer Architecture</span>
  <span>Algorithms & Data Structures</span>
  <span>Database Systems</span>
  <span>Software Engineering</span>
  <span>Artificial Intelligence</span>
  <span>Machine Learning</span>
  <span>Robotics</span>
</div>

        </div>
      </div>
    </section>
  );
};

export default Experience;