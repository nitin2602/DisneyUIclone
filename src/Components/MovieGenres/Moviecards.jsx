import React, { useEffect, useRef, useState } from "react";
import API from "../../API";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Moviecards = ({ genreid }) => {
  const [moviecardlist, setmoviecardlist] = useState();
  const refelement = useRef();
  const slideleft = (element) => {
    element.scrollLeft -= 500
  };
  const slideright = (element) => {
    element.scrollLeft += 500
  };

  const moviebygenrelist = () => {
    API.moviebygenreid(genreid).then((res) => {
      console.log(res.data.results);
      setmoviecardlist(res.data.results);
    });
  };
  useEffect(() => {
    moviebygenrelist();
  }, []);

  return (
    <div>
      <HiChevronLeft
        className="hidden sm:block text-white text-[40px] absolute
     left-5 mt-[150px] cursor-pointer "
        onClick={() => slideleft(refelement.current)}
      />
      <HiChevronRight
        className="hidden sm:block text-white text-[40px] absolute
        mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => slideright(refelement.current)}
      />
      <div
        className="flex overflow-x-auto gap-8
       scroll-smooth pt-4 px-3 pb-4 scrollbar-hide " ref={refelement}
      >
        {moviecardlist?.map((movie, index) => (
          <img
            className="w-[110px] md:w-[200px] rounded-lg
          hover:border-[3px] border-gray-400 cursor-pointer
          hover:scale-110 transition-all duration-150 ease-in"
            key={index}
            src={IMAGE_BASE_URL + movie.poster_path}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Moviecards;
