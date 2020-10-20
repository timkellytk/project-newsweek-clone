import React from 'react';
import Cover1 from '../../../img/cover-1.jpg';
import Cover2 from '../../../img/cover-2.jpg';

const NewsCTAs = () => {
  return (
    <div
      className="grid gap-8 py-8 border-t-2 border-b-2 border-gray-200"
      style={{ gridTemplateColumns: '2fr 1fr' }}
    >
      <div>
        <h6 className="uppercase font-bold text-primary tracking-tighter leading-tight">
          Subscribe
        </h6>
        <div
          className="grid items-center bg-gray-200 p-8 mt-3"
          style={{ gridTemplateColumns: '1fr 2fr' }}
        >
          <div className="relative" style={{ height: '275px' }}>
            <img
              className="absolute h-56 object-center object-cover z-10"
              style={{ bottom: '0%', left: '30%' }}
              src={Cover2}
              alt="Cover of Newsweek 18 October"
            />
            <img
              className="absolute top-0 left-0 h-56 object-center object-cover z-0"
              src={Cover1}
              alt="Cover of Newsweek 23 October"
            />
          </div>
          <div className="ml-8">
            <h4 className="text-2xl font-bold tracking-tighter leading-tight">
              In-depth Stories You Don't See Elsewhere About Topics You Want To
              Read!
            </h4>
            <div className="mt-2 font-light text-gray-700 text-sm">
              <p>All Access + Weekly Delivery.</p>
              <p>Choose A Membership That's Perfect for You!</p>
            </div>
            <button className="flex items-center mt-3 py-2 pl-3 pr-1 bg-primary text-white uppercase font-bold rounded">
              Subscribe
              <svg
                className="fill-current h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h6 className="uppercase font-bold text-primary tracking-tighter leading-tight">
          Newsletter
        </h6>
      </div>
    </div>
  );
};

export default NewsCTAs;
