import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';
import ScrollReveal from 'scrollreveal';
import './Home.css';

const Home = () => {
  const titles = [
    "Software  Developer",
    "Embedded  Developer",
    "ADAS  Engineer",
    "Human",
    "Student"
  ];

  const typewriterText = useTypewriter(titles);

  useEffect(() => {
    // Scroll Reveal animations
    if (typeof window !== 'undefined' && typeof ScrollReveal !== 'undefined') {
      const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
      });
      sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
      sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
      sr.reveal('.home__social-icon', { interval: 200 });
      sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
    }
  }, []);

  const projects = [
    {
      title: "Smart Trolley System",
      url: "https://github.com/Robin005cr/Smart_Trolley_System",
      tags: ["C++", "Path Planning"],
      description: "An intelligent shopping trolley system that uses AI and algorithms to automate item detection and checkout, improving retail efficiency.",
      image: "/assets/img/smart_trolley.jpg"
    },
    {
      title: "Calendar and Clock",
      url: "https://github.com/Robin005cr/Calendar-and-Clock",
      tags: ["C++", "STL"],
      description: "A Simple project to address the logical problems related to time.",
      image: "/assets/img/CalendarClock.jpg"
    },
    {
      title: "CPU-GPU selector",
      url: "https://github.com/Robin005cr/CPU-GPU_Selector",
      tags: ["C++", "Algorithms"],
      description: "A program which will decide the model training for machine learning tasks based on CPU clock usage.",
      image: "/assets/img/cpugpu.jpg"
    },
    {
      title: "Custom Protocol encoder - decoder",
      url: "https://github.com/Robin005cr/Custom_Protocol",
      tags: ["C++", "Algorithms"],
      description: "A method on how data is securely trasnferred among the services, cloud, layers etc..",
      image: "/assets/img/customprotocol.jpg"
    },
    {
      title: "Layered Communication",
      url: "https://github.com/Robin005cr/Layered-Communication",
      tags: ["C++", "Algorithms"],
      description: "This project focuses on how same data is handled in each layer and how each layer dependent or independent on near by layers.",
      image: "/assets/img/Layered.jpg"
    },
    {
      title: "Question Paper Set creator",
      url: "https://github.com/Robin005cr/Question_Paper_Set_Creator",
      tags: ["C++", "File handling"],
      description: "A tool that generates multiple randomized question papers from a given question bank.",
      image: "/assets/img/questionPaper.jpg"
    }
  ];

  const quotes = [
    '"Try! Try! Try! But never Fail to try."',
    '"Doing something is better than doing nothing."',
    '"If you move 1cm each day, in 100 days you will cross 100cms."',
    '"Its not about how many times you fails, Its always about how many times you chose to rise.."'
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = React.useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(quoteInterval);
  }, [quotes.length]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    if (!re.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    alert('Form submitted! Implement your backend logic here.');
    return false;
  };

  return (
    <>
      {/*===== HOME =====*/}
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">
            Hi,<br />
            I'am <span className="home__title-color">Robin CR</span><br />
            <span id="typewriter">{typewriterText}</span>
          </h1>
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/robin-cr/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
              title="LinkedIn"
            >
              <i className='bx bxl-linkedin'></i>
            </a>
            <a
              href="https://github.com/robin005cr/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
              title="GitHub"
            >
              <i className='bx bxl-github'></i>
            </a>
            <a
              href="https://leetcode.com/u/robinchovallurraju/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
              title="LeetCode profile"
            >
              <img src="/assets/img/leetcode.jpg" alt="LeetCode profile" style={{ width: '24px', height: '24px' }} />
            </a>
            <a
              href="https://www.hackerrank.com/profile/robinchovallurr1"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
              title="HackerRank profile"
            >
              <img src="/assets/img/hackerrank.png" alt="HackerRank profile" style={{ width: '24px', height: '24px' }} />
            </a>
            <a
              href="https://www.codechef.com/users/robin_005_cr"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
              title="CodeChef profile"
            >
              <img src="/assets/img/codechef.jpg" alt="CodeChef profile" style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        </div>

        <div className="home__img">
          <div className="profile-animated-border">
            <img src="/assets/img/robin.png" alt="Robin CR" className="profile-img" />
          </div>
        </div>
      </section>

      {/*===== ABOUT =====*/}
      <section className="about section" id="about">
        <h2 className="section-title">About me</h2>
        <div className="about__container" style={{ display: 'block', textAlign: 'center' }}>
          <div className="about__img">
            {/* Optional: Add a profile image here */}
          </div>
          <div>
            <h2 className="about__subtitle">I'am Robin</h2>
            <p className="about__text" style={{ textAlign: 'justify', margin: '0 auto', maxWidth: '600px' }}>
              I am a software developer, mostly working with C, C++, and occasionally with Ruby & Python. Code
              → Debug → Test: I consider all these phases equally important during the product cycle.
              This page is a part of my journey, where I document the challenges, projects, shortcuts, and
              lessons I encounter in my professional life.
            </p>
            <div className="cv-buttons" style={{ marginTop: '1rem' }}>
              <a
                href="/assets/CV/RobinCR_Software_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--blue"
              >
                View CV
              </a>
              <a
                href="/assets/CV/RobinCR_Software_Developer.docx"
                download
                className="button button--green"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*===== ROLES =====*/}
      <section className="roles section" id="roles">
        <h2 className="section-title">Roles I Played</h2>
        <div className="roles__container bd-grid">
          <div>
            <h3 className="roles__subtitle">C++ Application Developer</h3>
            <p className="roles__text">
              • Design Patterns<br />
              • SOLID Principles<br />
              • Multi-threading
            </p>
          </div>
          <div>
            <h3 className="roles__subtitle">ADAS / Autonomy Engineer</h3>
            <p className="roles__text">
              • Vision-based recognition<br />
              • Algorithm development<br />
              • Lidar perception
            </p>
          </div>
          <div>
            <h3 className="roles__subtitle">Embedded / Firmware Engineer</h3>
            <p className="roles__text">
              • Bare-metal programming<br />
              • Communication Protocols (I2C, SPI, UART)<br />
              • Encoder - Decoder for sensors
            </p>
          </div>
        </div>
      </section>

      {/*===== TOOLS =====*/}
      <section className="tools section" id="tools">
        <h2 className="section-title">Tools</h2>
        <div className="tools__container bd-grid">
          <div>
            <h3 className="tools__subtitle">Debugger</h3>
            <p className="tools__text">
              • Valgrind<br />
              • GDB<br />
              • Trace 32
            </p>
          </div>
          <div>
            <h3 className="tools__subtitle">Testing Tools</h3>
            <p className="tools__text">
              • CANoe<br />
              • Logic analyzers
            </p>
          </div>
        </div>
      </section>

      {/*===== SKILLS =====*/}
      <section className="skills section" id="skills">
        <h2 className="section-title">Sections</h2>
        <div className="skills__container bd-grid">
          <div>
            <div className="skills__data">
              <Link to="/prof_exp" className="skills__link">
                <div className="skills__names">
                  <span className="skills__name">Professional Experience</span>
                  <i className='bx bx-link-external skills__icon'></i>
                </div>
                <div className="skills__bar skills__css"></div>
              </Link>
            </div>
            <div className="skills__data">
              <Link to="/bugs" className="skills__link">
                <div className="skills__names">
                  <span className="skills__name">Bugs</span>
                  <i className='bx bx-link-external skills__icon'></i>
                </div>
                <div className="skills__bar skills__css"></div>
              </Link>
            </div>
            <div className="skills__data">
              <Link to="/shortcuts" className="skills__link">
                <div className="skills__names">
                  <span className="skills__name">Shortcuts</span>
                  <i className='bx bx-link-external skills__icon'></i>
                </div>
                <div className="skills__bar skills__html"></div>
              </Link>
            </div>
            <div className="skills__data">
              <Link to="/challenges" className="skills__link">
                <div className="skills__names">
                  <span className="skills__name">Challenges</span>
                  <i className='bx bx-link-external skills__icon'></i>
                </div>
                <div className="skills__bar skills__js"></div>
              </Link>
            </div>
            <div className="skills__data">
              <Link to="/trainings" className="skills__link">
                <div className="skills__names">
                  <span className="skills__name">Trainings</span>
                  <i className='bx bx-link-external skills__icon'></i>
                </div>
                <div className="skills__bar skills__css"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*===== PROJECT =====*/}
      <section className="project section" id="project">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project__container bd-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              className="project__card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="github-corner-ribbon" title="View on GitHub">
                <span className="github-ribbon-bg"></span>
                <i className="fab fa-github"></i>
              </span>
              <div className="project__text">
                <p>{project.title}</p>
                <div className="project__tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project__tag">{tag}</span>
                  ))}
                </div>
                <div className="project__desc">
                  <em>{project.description}</em>
                </div>
              </div>
              <div className="project__image">
                <img src={project.image} alt={project.title} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/*===== CONTACT =====*/}
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact__container bd-grid">
          <form action="#" method="POST" className="contact__form" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Name" name="name" className="contact__input" required />
            <input type="email" placeholder="Email" name="email" id="email" className="contact__input" required />
            <textarea
              name="message"
              placeholder="Description / Comment / Reason"
              cols="0"
              rows="10"
              className="contact__input"
              required
            ></textarea>
            <button type="submit" className="contact__button button">Connect</button>
          </form>
        </div>
      </section>

      {/*===== QUOTES =====*/}
      <section className="quotes section" id="quotes">
        <h2 className="section-title">Quotes</h2>
        <div className="quotes__container">
          <blockquote
            id="quoteText"
            className={`quote__text ${currentQuoteIndex !== undefined ? 'show' : ''}`}
          >
            {quotes[currentQuoteIndex]}
          </blockquote>
        </div>
      </section>
    </>
  );
};

export default Home;

