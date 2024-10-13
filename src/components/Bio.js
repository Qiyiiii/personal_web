// src/components/Bio.js

import React from 'react';
import './Bio.css'; // Import the CSS file

const Bio = () => {
  return (
    <section id="bio">
      
      <p>
          I am currently pursuing a Master of Management Analytics (MMA) at the <a href="https://www.rotman.utoronto.ca/" target="_blank" class = "bio-link" rel="noopener noreferrer">Rotman School of Management</a>, University of Toronto. 

        </p>
        <p className="bio-text">
          Previously, I was an undergraduate at the <strong>University of Toronto St. George Campus (USTG)</strong>, specializing in <strong>Computer Science</strong> with a focus in <em>Artificial Intelligence</em> and I also completed a minor in <strong>Statistics</strong>.
        </p>
        
        <p>
          My experience and academic background have equipped me with expertise in <strong>data analytics</strong>, <strong>machine learning</strong>, and <strong>full-stack development</strong>. I am passionate about using cutting-edge technology to solve complex problems and thrive in both collaborative and independent environments.
        </p>
    </section>
  );
};

export default Bio;
