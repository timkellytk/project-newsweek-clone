import React from 'react';
import Opinion from '../../../img/opinion.png';

const NewsOpinion = (props) => {
  return (
    <div
      className={`flex py-3 border-gray-500 ${props.first ? '' : 'border-t'}`}
    >
      <a className="flex-shrink-0" href="#empty">
        <img src={Opinion} alt="opinion man" />
      </a>
      <div className="ml-4">
        <a href="#empty">
          <h4
            className="font-bold tracking-tighter leading-tight hover:underline"
            style={{
              textDecorationColor: 'red',
            }}
          >
            Barrett Is McConnell's Deadly Gift to an Ailing NRA
          </h4>
        </a>
        <p className="uppercase font-bold text-gray-700 tracking-tighter text-xs mt-1">
          By Claire O. Finkelstein and Richard W. Painter
        </p>
      </div>
    </div>
  );
};

export default NewsOpinion;
