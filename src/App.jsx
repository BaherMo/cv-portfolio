import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const cvData = {
  name: 'Baher Elsisi',
  title: 'Full Stack Developer',
  email: 'BaherNUoutlook.com',
  phone: '+20 112 834 0272',
  location: 'Cairo, Egypt',
  summary: 'Full Stack Developer specializing in the MERN stack. Experienced in building scalable, full-stack web applications with modern front-end interfaces and robust back-end RESTful APIs.',
  skills: {
    languages: ['JavaScript ES6', 'TypeScript', 'Python'],
    frontend: ['React.js', 'Next.js', 'Redux', 'React Query', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Context API'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'JWT Authentication'],
    databases: ['MongoDB', 'Mongoose ODM', 'MySQL'],
    tools: ['Git', 'GitHub', 'Docker', 'Jest', 'VS Code', 'Postman']
  },
  experience: [
    {
      title: 'Full Stack Developer Trainee',
      company: 'ITShare Cairo',
      period: 'Sep 2024 - Aug 2025',
      achievements: [
        'Engineered and deployed 4 full-stack applications using MERN stack',
        'Developed 12 secure RESTful API endpoints with JWT authentication',
        'Designed and optimized MongoDB database schemas, reducing query latency by 20%',
        'Collaborated in Agile/Scrum teams, boosting productivity by 25%'
      ]
    },
    {
      title: 'IT Intern',
      company: 'Systel Telecom',
      period: 'Jul 2023 - Nov 2023',
      achievements: [
        'Supported IT infrastructure by troubleshooting 50 network and system issues',
        'Improved system uptime by 15% through proactive monitoring'
      ]
    }
  ],
  projects: [
    {
      title: 'Full-Stack E-Commerce Platform',
      tech: 'React.js, Node.js, Express.js, MongoDB, Redux',
      description: 'Responsive e-commerce application with user authentication and product management',
      achievements: ['20% faster load time', '12 RESTful endpoints', 'Supports 1000+ mock users']
    },
    {
      title: 'Diabetes Prediction System',
      tech: 'Python, Pandas, Scikit-learn, Matplotlib',
      description: 'Machine learning model for diabetes likelihood prediction',
      achievements: ['92% accuracy', '1000 patient records', '5-fold cross-validation']
    }
  ],
  publications: [
    {
      title: 'Smart Diabetes - An Intelligent Classifier for Continuous Health Monitoring',
      conference: '3ICT 2024 International Conference',
      link: 'https://ieeexplore.ieee.org/document/10375830'
    },
    {
      title: 'An Intelligent Handwritten Digits and Characters Recognition System',
      conference: '3ICT 2022 International Conference',
      link: 'https://ieeexplore.ieee.org/document/9912300'
    }
  ]
};

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1 className="title">Hello, I'm <span className="gradient">{cvData.name}</span></h1>
      <p className="subtitle">Full Stack Developer specializing in <span className="highlight">MERN Stack</span></p>
      <p className="description">{cvData.summary}</p>
      <div className="contact-links">
        <a href={`mailto:${cvData.email}`} className="link">📧 Email</a>
        <a href={`tel:${cvData.phone}`} className="link">📱 Phone</a>
        <a href="https://github.com/BaherMo" target="_blank" rel="noopener noreferrer" className="link"><FaGithub style={{ marginRight: "8px", verticalAlign: "middle" }} />  GitHub</a>
        <a href="https://linkedin.com/in/baher-abdelmawla" target="_blank" rel="noopener noreferrer" className="link"><FaLinkedin style={{ marginRight: "8px", verticalAlign: "middle" }} /> LinkedIn</a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section">
    <h2 className="section-title">About Me</h2>
    <div className="about-grid">
      <div>
        <h3>Professional Summary</h3>
        <p>{cvData.summary}</p>
      </div>
      <div className="stats">
        <div className="stat"><div className="number">4+</div><div>Full-Stack Apps</div></div>
        <div className="stat"><div className="number">12+</div><div>API Endpoints</div></div>
        <div className="stat"><div className="number">2</div><div>Published Papers</div></div>
        <div className="stat"><div className="number">3.4</div><div>GPA</div></div>
      </div>
    </div>
    <div className="education">
      <h3>Education</h3>
      <div className="edu-card">
        <h4>BSc in Computer Engineering</h4>
        <p className="period">Sep 2019 - Jun 2024</p>
        <p className="institution">Nile University, Cairo, Egypt</p>
        <p className="badges"><span>GPA: 3.4/4.0</span> <span>Thesis: Smart Diabetes (Grade A+)</span></p>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="section">
    <h2 className="section-title">Technical Skills</h2>
    <div className="skills-grid">
      <div className="skill-category">
        <h3>Programming Languages</h3>
        <div className="tags">{cvData.skills.languages.map(s => <span key={s} className="tag">{s}</span>)}</div>
      </div>
      <div className="skill-category">
        <h3>Frontend</h3>
        <div className="tags">{cvData.skills.frontend.map(s => <span key={s} className="tag">{s}</span>)}</div>
      </div>
      <div className="skill-category">
        <h3>Backend</h3>
        <div className="tags">{cvData.skills.backend.map(s => <span key={s} className="tag">{s}</span>)}</div>
      </div>
      <div className="skill-category">
        <h3>Databases</h3>
        <div className="tags">{cvData.skills.databases.map(s => <span key={s} className="tag">{s}</span>)}</div>
      </div>
      <div className="skill-category">
        <h3>Tools & Methodologies</h3>
        <div className="tags">{cvData.skills.tools.map(s => <span key={s} className="tag">{s}</span>)}</div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="section">
    <h2 className="section-title">Experience</h2>
    {cvData.experience.map((exp, i) => (
      <div key={i} className="exp-card">
        <div className="exp-header">
          <h3>{exp.title}</h3>
          <span className="period">{exp.period}</span>
        </div>
        <p className="company">{exp.company}</p>
        <ul className="achievements">
          {exp.achievements.map((a, j) => <li key={j}>{a}</li>)}
        </ul>
      </div>
    ))}
  </section>
);

const Projects = () => (
  <section id="projects" className="section">
    <h2 className="section-title">Projects</h2>
    <div className="projects-grid">
      {cvData.projects.map((proj, i) => (
        <div key={i} className="project-card">
          <h3>{proj.title}</h3>
          <p className="tech">{proj.tech}</p>
          <p>{proj.description}</p>
          <div className="achievements">
            {proj.achievements.map((a, j) => <span key={j} className="badge">{a}</span>)}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Publications = () => (
  <section id="publications" className="section">
    <h2 className="section-title">Publications</h2>
    {cvData.publications.map((pub, i) => (
      <div key={i} className="pub-card">
        <h3>
         <a href={pub.link} target="_blank" rel="noopener noreferrer">
            {pub.title}
          </a>
        </h3>
        <p>{pub.conference}</p>
      </div>
    ))}
  </section>
);

const Navigation = () => (
  <nav className="navbar">
    <div className="logo">Baher</div>
    <div className="nav-links">
      <a href="#about" className="nav-link">About</a>
      <a href="#skills" className="nav-link">Skills</a>
      <a href="#experience" className="nav-link">Experience</a>
      <a href="#projects" className="nav-link">Projects</a>
    </div>
  </nav>
);

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
    </div>
  );
}