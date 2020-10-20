import React from 'react';
import LogoN from '../../Utility/LogoN/LogoN';

const NewsArticleSignup = () => {
  return (
    <div className="m-4 p-4 bg-gray-100 border-gray-300 border">
      <div className="flex items-center">
        <LogoN />
        <span className="font-bold uppercase leading-snug tracking-tighter ml-3">
          START YOUR DAY WITH OUR TOP 5 ARTICLES
        </span>
      </div>
      <form className="mt-3">
        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-gray-400 px-2 py-1 rounded-sm"
        />
        <input
          type="submit"
          className="w-full py-1 mt-2 bg-primary text-white font-bold uppercase rounded-sm cursor-pointer"
          value="Free Sign Up"
        />
      </form>
    </div>
  );
};

export default NewsArticleSignup;
