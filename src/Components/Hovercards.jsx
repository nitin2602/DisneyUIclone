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
        video="\Videos\pixar.mp4"
        image="\Images\pixar.png"
      />
      <Hovercard
        video="\Videos\disney.mp4"
        image="\Images\disney.png"
      />
      <Hovercard
        video="\Videos\national-geographic.mp4"
        image="\Images\nationalG.png"
      />
      <Hovercard
        video="\Videos\star-wars.mp4"
        image="\Images\starwar.png"
      />
    </div>
  );
};

export default Hovercards;
