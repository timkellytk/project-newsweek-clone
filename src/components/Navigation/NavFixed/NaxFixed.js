import React from 'react';
import LoginBtn from '../NavBtns/LoginBtn';
import SubscribeBtn from '../NavBtns/SubscribeBtn';
import HamburgerBtn from '../NavBtns/HamburgerBtn';

const NavFixed = (props) => {
  return (
    <div class="flex justify-between items-center fixed top-0 w-full z-50 bg-primary text-white px-3 py-2">
      <div class="font-logo text-2xl">Newsweek</div>
      <div class="flex items-center">
        <LoginBtn />
        <SubscribeBtn />
        <HamburgerBtn {...props} />
      </div>
    </div>
  );
};

export default NavFixed;
