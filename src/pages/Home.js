import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';
import './Home.css';

const Home = () => {
  const titles = [
    'Embedded Developer',
    'ADAS Engineer',
    'C++ Developer',
    'Robotics Enthusiast'
  ];

  const typewriterText = useTypewriter(titles);

  const domains = [
    {
      id: 'embedded',
      icon: 'bx-chip',
      title: 'Embedded Systems',
      color: 'embedded',
      description: 'Bare-metal firmware, sensor interfacing, and real-time communication protocols for resource-constrained hardware.',
      skills: ['Bare-metal C/C++', 'I2C · SPI · UART', 'Sensor Encoders', 'RTOS'],
    },
    {
      id: 'robotics',
      icon: 'bx-bot',
      title: 'Robotics',
      color: 'robotics',
      description: 'Autonomous navigation, path planning, and ROS-based systems that bridge perception with actuation.',
      skills: ['ROS / ROS2', 'Path Planning', 'Multi-threading', 'System Integration'],
    },
    {
      id: 'adas',
      icon: 'bx-car',
      title: 'ADAS & Autonomy',
      color: 'adas',
      description: 'Vision-based perception, LiDAR processing, and algorithm development for advanced driver assistance.',
      skills: ['LiDAR Perception', 'Computer Vision', 'CANoe Testing', 'KPI Engineering'],
    },
  ];

  const techStack = [
    'C', 'C++', 'Python', 'Linux', 'ROS', 'docker', 'Git', 'Multi-threading', 'Design Patterns', 'Perception',
  ];

  const projects = [
    {
      title: 'Smart Trolley System',
      url: 'https://github.com/Robin005cr/Smart_Trolley_System',
      tags: ['C++', 'Path Planning', 'Robotics'],
      category: 'robotics',
      description: 'Intelligent shopping trolley with AI-driven item detection and automated checkout.',
      image: '/assets/img/smart_trolley.jpg',
    },
    {
      title: 'Custom Protocol Encoder-Decoder',
      url: 'https://github.com/Robin005cr/Custom_Protocol',
      tags: ['C++', 'Embedded', 'Protocols'],
      category: 'embedded',
      description: 'Secure data transfer protocol for services, cloud layers, and embedded endpoints.',
      image: '/assets/img/customprotocol.jpg',
    },
    {
      title: 'Layered Communication',
      url: 'https://github.com/Robin005cr/Layered-Communication',
      tags: ['C++', 'Networking'],
      category: 'embedded',
      description: 'Multi-layer data handling demonstrating layer independence and protocol stack design.',
      image: '/assets/img/Layered.jpg',
    },
    {
      title: 'CPU-GPU Selector',
      url: 'https://github.com/Robin005cr/CPU-GPU_Selector',
      tags: ['C++', 'HPC', 'Algorithms'],
      category: 'adas',
      description: 'Workload routing for ML training based on CPU clock usage and compute profiling.',
      image: '/assets/img/cpugpu.jpg',
    },
    {
      title: 'Calendar and Clock',
      url: 'https://github.com/Robin005cr/Calendar-and-Clock',
      tags: ['C++', 'STL'],
      category: 'embedded',
      description: 'Time-logic problem solver built with C++ standard library primitives.',
      image: '/assets/img/CalendarClock.jpg',
    },
    {
      title: 'Question Paper Set Creator',
      url: 'https://github.com/Robin005cr/Question_Paper_Set_Creator',
      tags: ['C++', 'File Handling'],
      category: 'embedded',
      description: 'Automated generation of randomized question papers from a structured question bank.',
      image: '/assets/img/questionPaper.jpg',
    },
  ];

  const exploreLinks = [
    { to: '/prof_exp', label: 'Professional Experience', icon: 'bx-briefcase' },
    { to: '/certifications', label: 'Certifications', icon: 'bx-certification' },
    { to: '/challenges', label: 'Challenges', icon: 'bx-trophy' },
    { to: '/bugs', label: 'Bugs & Fixes', icon: 'bx-bug' },
    { to: '/shortcuts', label: 'Shortcuts', icon: 'bx-terminal' },
  ];

  const quotes = [
    'Try! Try! Try! But never fail to try.',
    'Doing something is better than doing nothing.',
    'If you move 1 cm each day, in 100 days you will cross 100 cm.',
    'It\'s not about how many times you fail — it\'s about how many times you choose to rise.',
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex(prev => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Message received! Connect your backend to enable delivery.');
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.querySelector('#project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero__grid-bg" aria-hidden="true" />
        <div className="hero__inner bd-grid">
          <div className="hero__content">
            <div className="hero__badges">
              <span className="badge badge--embedded">Learn</span>
              <span className="badge badge--robotics">Create</span>
              <span className="badge badge--adas">Innovate</span>
            </div>
            <p className="hero__greeting">Hi, I'm</p>
            <h1 className="hero__name">Robin CR</h1>
            <p className="hero__role">
              <span className="hero__role-prefix">&gt; </span>
              <span id="typewriter">{typewriterText}</span>
              <span className="hero__cursor">|</span>
            </p>
            <p className="hero__tagline">
              Building firmware, autonomous systems, and perception pipelines
              at the intersection of hardware and intelligent software.
            </p>
            <div className="hero__actions">
              <a href="#project" className="button button--primary" onClick={scrollToProjects}>
                View Projects
              </a>
              <a
                href="/assets/CV/RobinCR_Software_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--outline"
              >
                <i className="bx bx-file" /> Resume
              </a>
            </div>
            <div className="hero__social">
              <a href="https://www.linkedin.com/in/robin-cr/" target="_blank" rel="noopener noreferrer" className="hero__social-link" title="LinkedIn">
                <i className="bx bxl-linkedin" />
              </a>
              <a href="https://github.com/robin005cr/" target="_blank" rel="noopener noreferrer" className="hero__social-link" title="GitHub">
                <i className="bx bxl-github" />
              </a>
              <a href="https://leetcode.com/u/robinchovallurraju/" target="_blank" rel="noopener noreferrer" className="hero__social-link" title="LeetCode">
                <img src="/assets/img/leetcode.jpg" alt="LeetCode" />
              </a>
              <a href="https://www.hackerrank.com/profile/robinchovallurr1" target="_blank" rel="noopener noreferrer" className="hero__social-link" title="HackerRank">
                <img src="/assets/img/hackerrank.png" alt="HackerRank" />
              </a>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__ring hero__ring--1" aria-hidden="true" />
            <div className="hero__ring hero__ring--2" aria-hidden="true" />
            <div className="hero__ring hero__ring--3" aria-hidden="true" />
            <div className="profile-frame">
              <img src="/assets/img/robin.png" alt="Robin CR" className="profile-img" />
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="domains section" id="domains">
        <div className="bd-grid">
          <span className="section-label section-label--center">Core Domains</span>
          <h2 className="section-title">Where I Build</h2>
          <p className="section-subtitle">
            Three engineering disciplines that define my work — from silicon to software-defined vehicles.
          </p>
          <div className="domains__grid">
            {domains.map((domain) => (
              <article key={domain.id} className={`domain-card domain-card--${domain.color}`}>
                <div className="domain-card__icon">
                  <i className={`bx ${domain.icon}`} />
                </div>
                <h3 className="domain-card__title">{domain.title}</h3>
                <p className="domain-card__desc">{domain.description}</p>
                <ul className="domain-card__skills">
                  {domain.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="bd-grid about__grid">
          <div className="about__content">
            <span className="section-label">About</span>
            <h2 className="section-title about__title">Engineer at the Edge</h2>
            <p className="about__text">
              I'm a software developer specializing in C and C++, with experience spanning
              embedded firmware, robotics middleware, and ADAS perception pipelines.
              My workflow: code, debug, test — documenting every challenge, shortcut, and
              lesson along the way.
            </p>
            <div className="about__stats">
              <div className="stat">
                <span className="stat__value">C/C++</span>
                <span className="stat__label">Primary Stack</span>
              </div>
              <div className="stat">
                <span className="stat__value">3</span>
                <span className="stat__label">Core Domains</span>
              </div>
              <div className="stat">
                <span className="stat__value">6+</span>
                <span className="stat__label">Projects</span>
              </div>
            </div>
            <div className="cv-buttons">
              <a href="/assets/CV/RobinCR_Software_Developer.pdf" target="_blank" rel="noopener noreferrer" className="button button--primary">
                View CV
              </a>
              <a href="/assets/CV/RobinCR_Software_Developer.docx" download className="button button--outline">
                Download CV
              </a>
            </div>
          </div>
          <div className="about__roles">
            <h3 className="about__roles-title">Roles I've Played</h3>
            <div className="role-item">
              <span className="role-item__dot role-item__dot--embedded" />
              <div>
                <strong>C++ Application Developer</strong>
                <p>Design Patterns · SOLID · Multi-threading</p>
              </div>
            </div>
            <div className="role-item">
              <span className="role-item__dot role-item__dot--adas" />
              <div>
                <strong>ADAS / Autonomy Engineer</strong>
                <p>Vision Recognition · LiDAR Perception · Algorithms</p>
              </div>
            </div>
            <div className="role-item">
              <span className="role-item__dot role-item__dot--robotics" />
              <div>
                <strong>Embedded / Firmware Engineer</strong>
                <p>Bare-metal · I2C/SPI/UART · Sensor Encoders</p>
              </div>
            </div>
            <h3 className="about__roles-title about__roles-title--secondary">Open To</h3>
            <div className="chip-list">
              {['C++ Linux Dev', 'Perception Engineer', 'ROS Developer', 'HPC Engineer', 'KPI Engineer', 'Performance Engineer'].map(role => (
                <span key={role} className="chip">{role}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="stack section" id="stack">
        <div className="bd-grid">
          <span className="section-label section-label--center">Toolkit</span>
          <h2 className="section-title">Tech Stack & Tools</h2>
          <div className="stack__grid">
            <div className="stack__group">
              <h3 className="stack__group-title"><i className="bx bx-code-alt" /> Languages & Frameworks</h3>
              <div className="chip-list chip-list--center">
                {techStack.map(tech => (
                  <span key={tech} className="chip chip--tech">{tech}</span>
                ))}
              </div>
            </div>
            <div className="stack__tools">
              <div className="tool-card">
                <h4><i className="bx bx-bug" /> Debuggers</h4>
                <p>Valgrind · GDB · Trace32</p>
              </div>
              <div className="tool-card">
                <h4><i className="bx bx-test-tube" /> Testing</h4>
                <p>CANoe · Logic Analyzers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects section" id="project">
        <div className="bd-grid">
          <span className="section-label section-label--center">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Selected work across embedded systems, robotics, and compute optimization.
          </p>
          <div className="projects__grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                className={`project-card project-card--${project.category}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-card__image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span className="project-card__category">{project.category}</span>
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-card__tag">{tag}</span>
                    ))}
                  </div>
                  <span className="project-card__link">
                    View on GitHub <i className="bx bx-link-external" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="explore section" id="skills">
        <div className="bd-grid">
          <span className="section-label section-label--center">Explore</span>
          <h2 className="section-title">More From My Journey</h2>
          <div className="explore__grid">
            {exploreLinks.map(link => (
              <Link key={link.to} to={link.to} className="explore-card">
                <i className={`bx ${link.icon}`} />
                <span>{link.label}</span>
                <i className="bx bx-right-arrow-alt explore-card__arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="bd-grid">
          <span className="section-label section-label--center">Get in Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Interested in embedded, robotics, or ADAS work? Drop a message.
          </p>
          <form className="contact__form" onSubmit={handleFormSubmit}>
            <div className="contact__row">
              <input type="text" placeholder="Name" name="name" className="contact__input" required />
              <input type="email" placeholder="Email" name="email" className="contact__input" required />
            </div>
            <textarea
              name="message"
              placeholder="Your message..."
              rows="5"
              className="contact__input contact__textarea"
              required
            />
            <button type="submit" className="button button--primary contact__button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote-section section" id="quotes">
        <div className="bd-grid">
          <blockquote className="quote-block" key={currentQuoteIndex}>
            <i className="bx bxs-quote-left quote-block__icon" />
            <p className="quote-block__text">{quotes[currentQuoteIndex]}</p>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;
