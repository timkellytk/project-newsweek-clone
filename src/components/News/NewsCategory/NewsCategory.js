import React from 'react';
import citizenship from '../../../img/citizenship.png';
import college from '../../../img/college.jpg';

const NewsCategory = (props) => {
  return (
    <>
      <h3 className="text-primary capitalize font-bold text-xl">
        {props.title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
        <article>
          <a href="#empty">
            <img
              className="object-center object-cover w-full"
              src={citizenship}
              alt="american flag over the skyline"
            />
          </a>
          <header>
            <a href="#empty">
              <h5
                className="mt-3 font-bold text-xl leading-tight tracking-tight hover:underline"
                style={{ textDecorationColor: 'red' }}
              >
                Could You Pass the U.S. Citizenship Test?
              </h5>
            </a>
          </header>
        </article>
        <article>
          <a href="#empty">
            <img
              className="object-center object-cover w-full"
              src={citizenship}
              alt="american flag over the skyline"
            />
          </a>
          <header>
            <a href="#empty">
              <h5
                className="mt-3 font-bold text-xl leading-tight tracking-tight hover:underline"
                style={{ textDecorationColor: 'red' }}
              >
                Could You Pass the U.S. Citizenship Test?
              </h5>
            </a>
          </header>
        </article>
        <div>
          <div className="flex pb-2">
            <a className="flex-shrink-0" href="#empty">
              <img
                className="h-24 w-24 object-cover object-center"
                src={college}
                alt="college students"
              />
            </a>
            <a href="#empty">
              <h6
                className="ml-3 text-base font-bold leading-tight tracking-tight hover:underline"
                style={{ textDecorationColor: 'red' }}
              >
                This Is Where Every U.S. President Went to College
              </h6>
            </a>
          </div>
          <div className="flex border-gray-300 py-2 border-t">
            <a className="flex-shrink-0" href="#empty">
              <img
                className="h-24 w-24 object-cover object-center"
                src={college}
                alt="college students"
              />
            </a>
            <a href="#empty">
              <h6
                className="ml-3 text-base font-bold leading-tight tracking-tight hover:underline"
                style={{ textDecorationColor: 'red' }}
              >
                This Is Where Every U.S. President Went to College
              </h6>
            </a>
          </div>
          <div className="flex border-gray-300 py-2 border-t">
            <a className="flex-shrink-0" href="#empty">
              <img
                className="h-24 w-24 object-cover object-center"
                src={college}
                alt="college students"
              />
            </a>
            <a href="#empty">
              <h6
                className="ml-3 text-base font-bold leading-tight tracking-tight hover:underline"
                style={{ textDecorationColor: 'red' }}
              >
                This Is Where Every U.S. President Went to College
              </h6>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCategory;
