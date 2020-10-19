import React from 'react';
import NewsHeadline from '../NewsHeadline/NewsHeadline';
import relationship from '../../../img/relationship.jpg';

const NewsGrid3 = (props) => {
  return (
    <div className="mt-8">
      <NewsHeadline>{props.children}</NewsHeadline>
      <div className="grid gap-4 grid-cols-3">
        <div>
          <img
            className="object-cover object-center"
            src={relationship}
            alt="Two sets of hands holding coffee"
          />
          <div className="text-gray-600 font-bold text-sm leading-snug tracking-tighter mt-2">
            'I Fell in Love With My Best Friend and Finally Asked Her Out'
          </div>
        </div>
        <div>
          <img
            className="object-cover object-center"
            src={relationship}
            alt="Two sets of hands holding coffee"
          />
          <div className="text-gray-600 font-bold text-sm leading-snug tracking-tighter mt-2">
            'I Fell in Love With My Best Friend and Finally Asked Her Out'
          </div>
        </div>
        <div>
          <img
            className="object-cover object-center"
            src={relationship}
            alt="Two sets of hands holding coffee"
          />
          <div className="text-gray-600 font-bold text-sm leading-snug tracking-tighter mt-2">
            'I Fell in Love With My Best Friend and Finally Asked Her Out'
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsGrid3;
