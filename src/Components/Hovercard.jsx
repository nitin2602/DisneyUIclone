import React from "react";

const Hovercard = ({video,image}) => {
  return (
    <div
      className="border-[4px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            "
    >
      <video
        src={video}
        autoPlay
        loop
        playsInline
        muted
        className=" w-full absolute z-0 rounded-md 
            opacity-0 hover:opacity-70"
      />
      <img src={image} className="w-full z-[1] opacity-100" />
    </div>
  );
};

export default Hovercard;
