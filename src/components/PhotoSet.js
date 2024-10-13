import React from 'react';
import './PhotoSet.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const PhotoSet = ({ title }) => {
  return (
    
    <section id="photo-album-carousel">
  <h2>My Cat</h2>
  <p>I have a cat named Yuki.</p>

  <div className="flex-container">
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={4000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        useKeyboardArrows={true}
      >
        <div>
          <img src="imgs/cat1.jpg" alt="Yuki 1" className="carousel-image" />
        </div>
        <div>
          <img src="imgs/cat2.jpg" alt="Yuki 1" className="carousel-image" />
        </div>
        <div>
          <img src="imgs/cat3.jpg" alt="Yuki 1" className="carousel-image" />
        </div>
        <div>
          <img src="imgs/cat4.jpg" alt="Yuki 1" className="carousel-image" />
        </div>
        <div>
          <img src="imgs/cat5.jpg" alt="Yuki 1" className="carousel-image" />
        </div>
        <div>
          <img src="imgs/cat6.jpg" alt="Yuki 1" className="carousel-image" />
        </div>
        <div>
          <img src="imgs/cat7.jpg" alt="Yuki 1" className="carousel-image" />
        </div>
        <div>
          <img src="imgs/cat8.jpg" alt="Yuki 1" className="carousel-image" />
        </div>
      </Carousel>
    </div>

    <div className="right-content">
      <p>This is the new component aligned to the right of the photo album.</p>
    </div>
  </div>
</section>

  );
};

export default PhotoSet;