import React from 'react';

const FooterLink = (props) => {
  return (
    <li className="inline-block px-3 py-1 border-r hover:text-gray-900">
      <a href="#empty">{props.children}</a>
    </li>
  );
};

export default FooterLink;
