import React from 'react';

const NewsGrid4 = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 items-end">
      {props.children}
    </div>
  );
};

export default NewsGrid4;
