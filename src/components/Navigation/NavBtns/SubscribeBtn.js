import React from 'react';

const SubscribeBtn = () => (
  <a className="nav-btn nav-btn--subscribe" href="#empty">
    <span>Subscribe</span>
    <svg
      className="inline-block h-5 w-5 mb-1 "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
    </svg>
  </a>
);

export default SubscribeBtn;
