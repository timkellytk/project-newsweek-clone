import React from 'react';

const NavTop = () => {
  return (
    <div className="flex items-center justify-between bg-primary text-white px-6">
      <div>
        <a className="block font-bold" href="#empty">
          17° Sydney, AU
        </a>
        <date className="block mt-3">Thu, Oct 16, 2020</date>
      </div>
      <h1 className="text-6xl font-logo uppercase leading-tight">
        <span className="text-7xl">N</span>EWSWEEK
      </h1>
      <div className="mt-4 text-base font-bold uppercase tracking-tight">
        <a href="#empty">Login</a>
        <a
          className="ml-5 pl-4 pr-2 py-2 bg-yellow-500 text-black rounded-full"
          href="#empty"
        >
          <span>Subscribe</span>
          <svg
            className="inline-block h-5 w-5 mb-1 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NavTop;
