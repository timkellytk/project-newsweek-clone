import React from 'react';
import debate1 from '../../../img/debate1.png';
import debate2 from '../../../img/debate2.png';

const NewsDebate = () => {
  return (
    <div className="py-4 mb-4 border-t-4 border-b-4 border-gray-400">
      <div className="flex items-center">
        <a className="flex-shrink-0" href="#empty">
          <img
            className="h-16 w-16 rounded-full "
            src={debate1}
            alt="2 people from the debate"
          />
        </a>
        <div className="ml-4">
          <a href="#empty">
            <h4
              className="font-bold tracking-tighter leading-tight hover:underline"
              style={{
                textDecorationColor: 'red',
              }}
            >
              McConnell's Rush to Confirm Barrett Ignores Crucial Questions of
              Principle
            </h4>
          </a>
          <p className="uppercase text-gray-700 tracking-tighter text-xs mt-1">
            By{' '}
            <span className="font-bold">
              Claire O. Finkelstein and Richard W. Painter
            </span>
          </p>
        </div>
      </div>
      <div className="relative my-8 h-1 border-t border-b border-gray-300">
        <div
          className="absolute -mt-4 p-2 rounded-full bg-black text-gray-400 text-xs font-bold uppercase"
          style={{ left: '45%' }}
        >
          vs
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <a href="#empty">
            <h4
              className="font-bold tracking-tighter leading-tight hover:underline"
              style={{
                textDecorationColor: 'red',
              }}
            >
              On Supreme Court Nominations, All that Counts is the Constitution
            </h4>
          </a>
          <p className="uppercase text-gray-700 tracking-tighter text-xs mt-1">
            By <span className="font-bold">ANDREW C. MCCARTHY</span>
          </p>
        </div>
        <a className="flex-shrink-0" href="#empty">
          <img
            className="h-16 w-16 rounded-full "
            src={debate2}
            alt="2 people from the debate"
          />
        </a>
      </div>
    </div>
  );
};

export default NewsDebate;
