import React from 'react';
import NewsweekIssue from '../../../img/newsweek-issue.jpg';
import ImageTag from '../../Utility/ImageTag/ImageTag';

const NewsCoverIssue = () => {
  return (
    <a href="#empty">
      <ImageTag image={NewsweekIssue} tag="October 23 Issue" />
      <div className="flex justify-center items-center p-2 w-full text-center uppercase font-bold text-lg tracking-tighter bg-gray-200 hover:bg-gray-300">
        <span>See All Features</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </a>
  );
};

export default NewsCoverIssue;
