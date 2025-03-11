// Slider.jsx
import React, { useState, useEffect } from 'react';
import '../../style/main.scss';
const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    const getSlideClassName = (index) => {
        if (index === currentIndex) {
            return 'slide-image active';
        }
        const nextIndex = (currentIndex + 1) % images.length;

        if (index === nextIndex) {
            return 'slide-image next';
        }
        return 'slide-image left';
    };

    return (
        <div className="slider-container">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={getSlideClassName(index)}
                />
            ))}
        </div>
    );
};
  

export default Slider;
