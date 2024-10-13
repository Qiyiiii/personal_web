import React from 'react';
import './App.css';
import Bio from './components/Bio';
import WorkExp from './components/WorkExp';
import ProjExp from './components/ProjExp';
import More from './components/More';

function App() {
  return (
    
    <div className="App">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />

<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap" rel="stylesheet" />      
<link href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet"/>
      
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
      <h1 className='greeting'>Hi, I’m Qiyi (Leo) Zhang</h1>
      <section className="detail">
      
        <section id="bio">
          <h2 >Bio</h2>
          <Bio />
       
          <div className="container">
  
        
      </div>
        </section>

        <section id="work">
        <h2 >Career</h2>
        <WorkExp />

        </section>

        
        <section id="project">
          <h2>Project Experience</h2>
          <ProjExp />
      

        </section>

        <section id="more">
          <h2>More About Me</h2>
          <More />


        </section>
        </section>
      </div>
    </div>
  );
}

export default App;
