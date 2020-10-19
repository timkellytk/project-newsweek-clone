import React from 'react';

const SidedrawerLink = (props) => {
  return (
    <li>
      <a
        href="#empty"
        className="flex justify-between my-1 text-gray-900 hover:text-primary"
      >
        <span className="uppercase font-bold text-sm">{props.children}</span>
        <svg
          className="fill-current inline-block h-6 w-6 ml-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </a>
    </li>
  );
};

export default SidedrawerLink;
