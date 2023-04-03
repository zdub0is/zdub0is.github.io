import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Styles for the carousel
import '.././Tarot.css'; // Styles for your tarot cards

const TarotCarousel = () => {
    return (
      <Carousel>
        <div className="tarot-card">
          <div className="card-header">
            <h2>Project 1</h2>
          </div>
          <div className="card-content">
            <p>Project description</p>
          </div>
        </div>
        {/* Add more tarot cards as needed */}
      </Carousel>
    );
  };
  
  export default TarotCarousel;
  