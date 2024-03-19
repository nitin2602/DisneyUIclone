import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex font-bold justify-center text-teal-600 sm:justify-start dark:text-teal-300">
          Made by Nitin tripathi
          </div>

          <p className="mt-4 font-bold text-center text-lg text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
           Disney-UI clone- Made in 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
