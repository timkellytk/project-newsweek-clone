import React from 'react';

const NavMainLink = (props) => {
  return (
    <li
      className={`flex-grow text-center py ${
        !props.last && 'border-r border-gray-300'
      }`}
    >
      <a className="text-lg font-bold hover:text-primary" href="empty">
        {props.children}
      </a>
    </li>
  );
};

export default NavMainLink;
