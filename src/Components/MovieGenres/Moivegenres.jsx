import React from "react";
import Moviecards from "./Moviecards";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Moivegenres = ({ title, genreid }) => {

    
  return (
    <div>
      <h2
        className="text-[20px] text-white 
                font-bold"
      >
        {title}
      </h2>
      
      <Moviecards genreid={genreid} />
    </div>
  );
};

export default Moivegenres;
