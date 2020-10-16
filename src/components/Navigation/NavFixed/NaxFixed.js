import React from 'react';
import LoginBtn from '../NavBtns/LoginBtn';
import SubscribeBtn from '../NavBtns/SubscribeBtn';

const NavFixed = () => {
  return (
    <div class="flex justify-between items-center fixed top-0 left-0 right-0 bg-primary text-white px-3 py-2">
      <div class="font-logo text-2xl">Newsweek</div>
      <div class="flex items-center">
        <LoginBtn />
        <SubscribeBtn />
      </div>
    </div>
  );
};

export default NavFixed;
