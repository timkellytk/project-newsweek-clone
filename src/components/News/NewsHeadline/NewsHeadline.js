import React from 'react';

const NewsHeadline = (props) => {
  return (
    <h5 className="uppercase text-gray-500 font-bold tracking-tight mb-2">
      {props.children}
    </h5>
  );
};

export default NewsHeadline;
