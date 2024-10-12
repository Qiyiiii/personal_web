import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      
      <div className="sidebar">
          <div className="profile-container">
          <img
            src="imgs/headshot.jpg"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <h2 className="name">Qiyi Zhang</h2>
        <p className="role">MMA '25| Full-stack Software Developer | Data Scientist</p>

        <div className="contact-info">
          <p><strong>Contact</strong></p>
          <p>Email: qiyi.zhang@rotman.utoronto.ca</p>
          <p>Discord: leo010701</p>
          <p>Instagram: leozhang0701</p>
          <p>WeChat: zqy13966767271</p>
          

          <div className="links">
            <a href="https://www.linkedin.com/in/qiyi-zhang/" target="_blank" rel="noopener noreferrer">Linkedin</a><br />
            <a href="https://github.com/Qiyiiii" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      <div className="content">
      <header className="navbar">

        <nav >
          <ul>
            <li><a href="#bio">Bio</a></li>
            <li><a href="#work">Career</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#more">More</a></li>
          </ul>
        </nav>
      </header>
      <section className="detail">
        <section id="bio">
          <h2 >Bio</h2>
          <p >
            {"Masters of Management Analytics Candidate in Rotman School of Management, University of Toronto, Toronto, Ontario, Canada"}
          <br />
          <br />
            {"Data Scientist and Full-Stack Developer with expertise in data analytics, machine learning, and software development."}
            <br /><br />
            {"Experienced in deploying algorithms and building tools to automate data workflow. Recognized for innovative work in BERT-based models and dynamic web applications."}
          </p>
        </section>

        <section id="work">
          <h2>Work Experience</h2>
          <p>
            {"Masters of Management Analytics Candidate in Rotman School of Management, University of Toronto, Toronto, Ontario, Canada"}
          <br />
          <br />
            {"Data Scientist and Full-Stack Developer with expertise in data analytics, machine learning, and software development."}
            <br /><br />
            {"Experienced in deploying algorithms and building tools to automate data workflow. Recognized for innovative work in BERT-based models and dynamic web applications."}
          </p>

        </section>

        
        <section id="project">
          <h2>Project Experience</h2>
          <p>
            {"Masters of Management Analytics Candidate in Rotman School of Management, University of Toronto, Toronto, Ontario, Canada"}
          <br />
          <br />
            {"Data Scientist and Full-Stack Developer with expertise in data analytics, machine learning, and software development."}
            <br /><br />
            {"Experienced in deploying algorithms and building tools to automate data workflow. Recognized for innovative work in BERT-based models and dynamic web applications."}
          </p>

        </section>

        <section id="more">
          <h2>More About Me</h2>
          <p>
            {"Masters of Management Analytics Candidate in Rotman School of Management, University of Toronto, Toronto, Ontario, Canada"}
          <br />
          <br />
            {"Data Scientist and Full-Stack Developer with expertise in data analytics, machine learning, and software development."}
            <br /><br />
            {"Experienced in deploying algorithms and building tools to automate data workflow. Recognized for innovative work in BERT-based models and dynamic web applications."}
          </p>

        </section>
        </section>
      </div>
    </div>
  );
}

export default App;
