
import React, { useState, useEffect } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

function CAtSlide() {
  const slides = [
    {
      id: 1,
      img: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/week_14/Back-toschool/Desktop_Homepage_Slider__712x384.png",
      alt: "a slide"
    },
    {
      id: 2,
      img: "https://ng.jumia.is/cms/0-1-initiatives/jumia-pay/2024/March/712_384.jpg",
      alt: "a slide"
    },
    {
      id: 3,
      img: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/week_14/celebrate-style/Artboard_1.jpg",
      alt: "a slide"
    },
    {
      id: 4,
      img: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1Advertising/MARCH/starlink/slider.jpg",
      alt: "a slide"
    },
    {
      id: 5,
      img: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/week_14/celebrate-style/Artboard_1.jpg",
      alt: "a slide"
    },
    {
      id: 6,
      img: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0TV-campaign/Desktop_Homepage_Slider__712x384.png",
      alt: "a slide"
    },
    {
      id: 7,
      img: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/week_14/Back-toschool/Desktop_Homepage_Slider__712x384.png",
      alt: "a slide"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentSlide]); 


  return (
    <div className="h-full w-full relative ">
      <div className="flex w-full overflow-hidden transition-transform ease-in-out duration-500">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`absolute top-0 left-0 ${index === currentSlide ? 'block' : 'hidden'}`}>
            <img src={slide.img} alt={slide.alt} className="w-[712px]" />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <AiOutlineLeftCircle size={32} />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <AiOutlineRightCircle size={32} />
      </button>
    </div>
  );
}

export default CAtSlide;