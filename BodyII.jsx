import React, { useState, useEffect } from "react";
import ai1 from "../assets/ai1.jpg";
import ai2 from "../assets/ai2.jpg";
import ai3 from "../assets/ai3.jpg";
import ai4 from "../assets/ai4.jpg";
import ai5 from "../assets/ai5.jpg";
import ai6 from "../assets/ai6.jpg";
import ai7 from "../assets/ai7.jpg";
import ai8 from "../assets/ai8.jpg";
import ai9 from "../assets/ai9.jpg";

import "../App.css";
function BodyII()
{
  const [imageIndex, setImageIndex] = useState(0);

  const handleNextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => 
  {
    // Image change logic
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex === 8 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const images = [ai1, ai2, ai3, ai7,ai8,ai9,ai4, ai5, ai6,ai7];

  return(
    <>
      <div className="body-content-II">
        <span className="text typedjs-text"></span>
        <div className="body-content-II-first">
          {/* Left Arrow Button */}
          <button
            className="arrow-button left arr-left"
            onClick={handlePrevImage}
          >
            &lt;
          </button>
          {/* Image Carousel */}
          <img src={images[imageIndex]} alt="" width="1240px" height="300px" />
          {/* Right Arrow Button */}
          <button
            className="arrow-button right arr-right"
            onClick={handleNextImage}
          >
            &gt;
          </button>
        </div>
        <marquee behavior="" direction="left" className="marqu-tag">
          <strong>
            Hello and Welcome in BookMyEvents! Here we provide you various type
            of services regarding the bookings of plays,movies,activities and
            etc...
          </strong>
        </marquee>
      </div>
    </>
  )
}
export default BodyII;