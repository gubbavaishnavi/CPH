import React, { useEffect, useRef } from 'react';

export default function Carousel() {
  const carouselRef = useRef(null);

useEffect(() => {
  const interval = setInterval(() => {
    try {
      const carousel = carouselRef.current;
      if (carousel) {
        carousel.dispatchEvent(new Event('slide.bs.carousel', { bubbles: true }));
      }
    } catch (error) {
      console.error('Error dispatching slide event:', error);
    }
  }, 5); 

  return () => clearInterval(interval);
}, []);


  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div className="carousel-inner" id="carousel" ref={carouselRef}>
          <div className="carousel-item active">
            <img src="../images/image2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../images/image3.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../images/image4.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../images/image5.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../images/image6.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
