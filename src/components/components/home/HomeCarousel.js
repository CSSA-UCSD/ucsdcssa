import React, { useEffect } from 'react';
const HomeCarousel = () => {
  // if you want to add more images, just add them to the 'Carousel' images folder and then add a line here with the same format as the others
  const images = [
    require('../../../img/Carousel/c1.png'), // Remember: no .default because of Node 16
    require('../../../img/Carousel/c2.png'),
    require('../../../img/Carousel/c3.png'),
    require('../../../img/Carousel/c4.png'),
    require('../../../img/Carousel/c5.png'),
    require('../../../img/Carousel/c6.png'),
    require('../../../img/Carousel/c7.png'),
    // require('../../../img/Carousel/c8.png'),
    require('../../../img/Carousel/c9.png'),
  ];

// 2. Styles
  const carouselItemStyle = {
    // This makes the carousel height relative to the screen width (Aspect Ratio)
    // 16:9 ratio is standard for photos/video
    aspectRatio: '16 / 9', 
    height: 'auto',
    maxHeight: '600px', // Prevents it from being TOO huge on giant monitors
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    // 'contain' ensures the WHOLE photo is visible (nothing cut off)
    // 'cover' fills the space (some edges cut off)
    // Let's use 'cover' but center it perfectly
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block'
  };


  const buttonStyle = {
    background: 'none',
    border: 'none',
    outline: 'none'
  };

// 3. Logic to initialize the carousel functionality
  useEffect(() => {
    const initCarousel = () => {
      // Check if jQuery and the carousel function exist
      if (window.$ && typeof window.$().carousel === 'function') {
        const $carousel = window.$('#homeHeroCarousel');
        
        // Initialize with your settings
        $carousel.carousel({
          interval: 2000,
          pause: 'hover',
          ride: 'carousel'
        });

        // FORCE start the cycling immediately
        $carousel.carousel('cycle');
      }
    };

    initCarousel();
    
    // Safety check: try again once just in case the first attempt was too early
    const timer = setTimeout(initCarousel, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="homeHeroCarousel" className="carousel slide" data-ride="carousel">
      
      {/* Indicators (The Dots) */}
      <ol className="carousel-indicators">
        {images.map((_, index) => (
          <li 
            key={index}
            data-target="#homeHeroCarousel" 
            data-slide-to={index} 
            className={index === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>

      {/* Slides */}
      <div className="carousel-inner">
        {images.map((imgSrc, index) => (
          <div 
            key={index} 
            className={`carousel-item ${index === 0 ? "active" : ""}`} 
            style={carouselItemStyle}
          >
            <img src={imgSrc} style={imageStyle} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Controls (Using buttons to avoid React Router conflicts) */}
      <button 
        className="carousel-control-prev" 
        type="button"
        data-target="#homeHeroCarousel" 
        data-slide="prev"
        style={buttonStyle}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>

      <button 
        className="carousel-control-next" 
        type="button"
        data-target="#homeHeroCarousel" 
        data-slide="next"
        style={buttonStyle}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default HomeCarousel;