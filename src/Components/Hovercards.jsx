import React from "react";
import Hovercard from "./Hovercard";

const Hovercards = () => {
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
      <Hovercard
        video="src\assets\Videos\marvel.mp4"
        image="src\assets\Images\marvel.png"
      />
      <Hovercard
        video="src\assets\Videos\pixar.mp4"
        image="src\assets\Images\pixar.png"
      />
      <Hovercard
        video="src\assets\Videos\disney.mp4"
        image="src\assets\Images\disney.png"
      />
      <Hovercard
        video="src\assets\Videos\national-geographic.mp4"
        image="src\assets\Images\nationalG.png"
      />
      <Hovercard
        video="src\assets\Videos\star-wars.mp4"
        image="src\assets\Images\starwar.png"
      />
    </div>
  );
};

export default Hovercards;
