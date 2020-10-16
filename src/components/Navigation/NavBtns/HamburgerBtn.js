import React from 'react';

const HamburgerBtn = (props) => {
  return (
    <div
      className={`hamburger-icon ${props.mobileNav && 'open'}`}
      onClick={props.handleMobileNav}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerBtn;
