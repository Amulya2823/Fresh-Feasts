import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { MAIN_API, SLIDER_API } from "../utils/constants";
import { useState, useEffect } from "react";

import React from "react";

const Slider = () => {
  const [slider, setSlider] = useState([]);
  const [slide, setSlide] = useState(0);

  const sliderImages = async () => {
    const api = await fetch(MAIN_API);
    const json = await api.json();
    setSlider(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };

  useEffect(() => {
    sliderImages();
  }, []);

  const moveLeft = () => {
    if (slide == 0) return false
    setSlide(slide - 3);
  };

  const moveRight = () => {
    if (slider.length - 8 == slide) return false
    setSlide(slide + 3);
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex p-3 m-3 justify-between">
        <div className="font-bold text-4xl">What's on your mind?</div>
        <div className="flex">
          <div
            className=" cursor-pointer flex w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2 justify-center items-center "
            onClick={moveLeft} 
          >
            <FaArrowLeft />
          </div>
          <div
            className=" cursor-pointer flex w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2 justify-center items-center"
            onClick={moveRight}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {slider.map((cat) => {
          return (
            <div
              key={cat.id}
              className="shrink-0 w-[180px]"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              <img src={SLIDER_API + cat.imageId} />
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-[1px]"></hr>
    </div>
  );
};

export default Slider;
