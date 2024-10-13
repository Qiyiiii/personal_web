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
      <div>
          <img src="imgs/hefei.jpg" alt="ht" className="hometown-img" />
        </div>
      <p>
        Hefei, my hometown, is the vibrant capital of Anhui province, China. It's a city that blends tradition with modernity, known for its peaceful parks, beautiful lakes like Chaohu, and rich historical sites. The streets are alive with local cuisine, bustling markets, and the warmth of community life. It's a place of rapid development but retains its unique charm with a deep connection to Chinese culture and history.
      </p>
      
    </article>

    {/* Cat */}
    <article className="about-item">
   
      <PhotoSet title="Yuki's Album" />
    </article>

    {/* Favorite Video Game */}
    <article className="about-item">
      <h3>Video Games</h3>
      <p>
        I like playing video games.
        <br/>
        My favorite video game is The Legend of Zelda: Tears of the Kingdom.
        
      </p>
    </article>

    {/* Workout Hobby */}
    <article className="about-item">
      <h3>Workout Hobby</h3>
      <p>
        I have been working out as a hobby for 6 years.
        <br/>
        including weight lifting and swimming.
      </p>
    </article>
  </section>

  );
};

export default More;
