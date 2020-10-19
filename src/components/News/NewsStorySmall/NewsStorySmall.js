import React from 'react';
import GretchenWhitmer from '../../../img/gretchen-whitmer.jpg';

const NewsStorySmall = () => {
  return (
    <div className="py-3 border-t border-gray-300">
      <a href="#empty">
        <img
          className="float-left mr-3 object-cover object-center h-24 w-24"
          src={GretchenWhitmer}
          alt="Gretchen Whitmer"
        />
      </a>
      <a href="#empty">
        <h6
          className="font-bold tracking-tighter hover:underline"
          style={{
            textDecorationColor: 'red',
          }}
        >
          MI Gov Says Trump Inciting Domestic Terrorism, Endangering Public
          Servants
        </h6>
      </a>
      <span className="text-sm">
        Democratic Governor Gretchen Whitmer discussed Trump's most recent
        Michigan rally, during which crowd members chanted "Lock her up!" in
        reference to the state leader, on Sunday morning.
      </span>
    </div>
  );
};

export default NewsStorySmall;
