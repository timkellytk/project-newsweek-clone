import React from 'react';
import LoginBtn from '../NavBtns/LoginBtn';
import SubscribeBtn from '../NavBtns/SubscribeBtn';

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
      <div className="mt-4">
        <LoginBtn />
        <SubscribeBtn />
      </div>
    </div>
  );
};

export default NavTop;
