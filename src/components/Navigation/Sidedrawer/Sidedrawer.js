import React from 'react';
import SidedrawerLink from './SidedrawerLink/SidedrawerLink';

const Sidedrawer = (props) => {
  return (
    <ul
      class={`${
        props.mobileNav ? 'sidedrawer ' : 'sidedrawer sidedrawer--closed '
      }h-screen fixed top-0 right-0 z-10 overflow-scroll bg-gray-200 pt-16 pb-8 px-8`}
    >
      <li class="flex justify-between items-center mb-4 mr-1">
        <span>Search</span>
        <svg
          className="fill-current ml-2 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
      </li>
      <SidedrawerLink>U.S.</SidedrawerLink>
      <SidedrawerLink>World</SidedrawerLink>
      <SidedrawerLink>Business</SidedrawerLink>
      <SidedrawerLink>Tech & Science</SidedrawerLink>
      <SidedrawerLink>Culture</SidedrawerLink>
      <SidedrawerLink>Newsgeek</SidedrawerLink>
      <SidedrawerLink>Sports</SidedrawerLink>
      <SidedrawerLink>Health</SidedrawerLink>
      <SidedrawerLink>The Debate</SidedrawerLink>
      <SidedrawerLink>Vantage</SidedrawerLink>
      <SidedrawerLink>Weather</SidedrawerLink>
    </ul>
  );
};

export default Sidedrawer;
