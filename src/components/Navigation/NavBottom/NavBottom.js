import React from 'react';
import NavMainLink from './NavMainLink/NavMainLink';
import NavMinorLink from './NavMinorLink/NavMinorlink';
import classes from './NavBottom.module.css';

const NavMiddle = () => {
  return (
    <>
      <div className="flex">
        <div className="white w-full">
          <ul className="flex justify-items-stretch py-3">
            <NavMainLink>U.S.</NavMainLink>
            <NavMainLink>World</NavMainLink>
            <NavMainLink>Business</NavMainLink>
            <NavMainLink>Tech & Science</NavMainLink>
            <NavMainLink>Culture</NavMainLink>
            <NavMainLink>Newsgeek</NavMainLink>
            <NavMainLink>Sports</NavMainLink>
            <NavMainLink>The Debate</NavMainLink>
            <NavMainLink>Vantage</NavMainLink>
            <NavMainLink last>Weather</NavMainLink>
            <li>
              <a className="flex items-center text-gray-600" href="#empty">
                Search{' '}
                <svg
                  className="fill-current ml-2 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.cornerCustom}></div>
      </div>
      <div className="py-3 border-t-2 border-b-2 border-gray-200">
        <ul className="flex justify-evenly xl:mr-32">
          <NavMinorLink active>Trending</NavMinorLink>
          <NavMinorLink>Donald Trump</NavMinorLink>
          <NavMinorLink>Joe Biden</NavMinorLink>
          <NavMinorLink>Stimulus Package</NavMinorLink>
          <NavMinorLink>Coronavirus</NavMinorLink>
          <NavMinorLink>Amy Coney Barrett</NavMinorLink>
          <NavMinorLink>2020 Election</NavMinorLink>
          <NavMinorLink>Counties That Count</NavMinorLink>
        </ul>
      </div>
    </>
  );
};

export default NavMiddle;
