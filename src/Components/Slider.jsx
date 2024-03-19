import React, { useEffect, useRef, useState } from "react";
import API from "../API";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const screenWidth=window.innerWidth;

const Slider = () => {
  const refelement = useRef();
  const slideleft = (element) => {
    element.scrollLeft -= screenWidth-110
  };
  const slideright = (element) => {
    element.scrollLeft += screenWidth-110
  };
  useEffect(() => {
    getmovies();
  }, []);
  const [movielist, setmovielist] = useState();
  const getmovies = () => {
    API.movies.then((res) => {
      console.log(res.data.results);
      setmovielist(res.data.results);
    });
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden sm:block text-white text-[40px] absolute
        mx-8 mt-[150px] cursor-pointer "
        onClick={() => slideleft(refelement.current)}
      />
      <HiChevronRight
        className="hidden sm:block text-white text-[40px] absolute
        mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => slideright(refelement.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4
      scrollbar-hide scroll-smooth  "
        ref={refelement}
      >
        {movielist?.map((movie, index) => (
          <img
            key={index}
            className="min-w-full  md:h-[310px]  object-cover
             object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in "
            src={IMAGE_BASE_URL + movie.backdrop_path}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
