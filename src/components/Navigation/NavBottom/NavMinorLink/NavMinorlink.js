import React from 'react';

const NavMinorLink = (props) => {
  return (
    <li
      className={`text-sm uppercase font-bold  ${
        props.active ? 'text-gray-900' : 'text-gray-600'
      } hover:text-primary`}
    >
      <a href="#empty">{props.children}</a>
    </li>
  );
};

export default NavMinorLink;
