// src/components/More.js

import React from 'react';
import './More.css'; 
import PhotoSet from './PhotoSet';

const More= () => {
  return (
    <section id="more-about-me">


    {/* Hometown */}
    <article className="about-item">
      <h3>My Hometown</h3>
      <p>
        My hometown is Hefei, Anhui, China.
      </p>
      
    </article>

    {/* Cat */}
    <article className="about-item">
      <h3>My Cat</h3>
      <p>
        I have a cat named Yuki.
      </p>
      <PhotoSet title="Yuki's Album" />
    </article>

    {/* Favorite Video Game */}
    <article className="about-item">
      <h3>Favorite Video Game</h3>
      <p>
        My favorite video game is Zelda: Tear of the Kingdom.
      </p>
    </article>

    {/* Workout Hobby */}
    <article className="about-item">
      <h3>Workout Hobby</h3>
      <p>
        I have been working out as a hobby for 6 years.
      </p>
    </article>
  </section>

  );
};

export default More;
