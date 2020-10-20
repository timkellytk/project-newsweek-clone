import React from 'react';

const ImageTag = (props) => {
  return (
    <div className="relative">
      <img
        src={props.image}
        className="object-cover object-center w-full"
        alt="Donald Trump"
      ></img>
      <span
        className="inline-block absolute left-0 bottom-0 py-2 px-4 bg-gray-100 text-primary font-bold leading-tight"
        style={{ opacity: '90%' }}
      >
        {props.tag}
      </span>
    </div>
  );
};

export default ImageTag;
