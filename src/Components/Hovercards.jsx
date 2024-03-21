import React from "react";
import Hovercard from "./Hovercard";

const Hovercards = () => {
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
      <Hovercard
        video="\Videos\marvel.mp4"
        image="\Images\marvel.png"
      />
      <Hovercard
        video="public\Videos\pixar.mp4"
        image="public\Images\pixar.png"
      />
      <Hovercard
        video="public\Videos\disney.mp4"
        image="public\Images\disney.png"
      />
      <Hovercard
        video="public\Videos\national-geographic.mp4"
        image="public\Images\nationalG.png"
      />
      <Hovercard
        video="public\Videos\star-wars.mp4"
        image="public\Images\starwar.png"
      />
    </div>
  );
};

export default Hovercards;
