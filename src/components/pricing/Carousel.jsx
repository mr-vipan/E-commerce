// src/Carousel.js
import { useState } from "react";

const Carousel = () => {
  const slides = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/Alphonsa/GW/DEC/BAU/BUDGET-STORE-PC-2X._CB539168342_.jpg=Slide+1",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpg=Slide+2",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/BAU/Hero/DEC/New/V1/BAU_PC_-_Modern_wall_clocks._CB538767685_.jpg=Slide+3",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg=Slide+4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative max-w-full mx-auto overflow-hidden bg-[red]">
      {/* Carousel Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={goToPrev}
        className="absolute top-1/4 left-4 transform -translate-y-1/2 p-4 bg-gray-800 text-white rounded-full hover:bg-gray-600"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/4 right-4 transform -translate-y-1/2 p-4 bg-gray-800 text-white rounded-full hover:bg-gray-600"
      >
        &#10095;
      </button>

      {/* Optional: Dots for Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 bg-white rounded-full cursor-pointer ${
              currentIndex === index ? "bg-gray-800" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
