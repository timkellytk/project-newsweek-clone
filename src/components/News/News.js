import React from 'react';
import NewsStory from './NewsStory/NewsStory';
import NewsHeadline from './NewsHeadline/NewsHeadline';

const News = () => {
  return (
    <div className="p-6">
      <div className="news-grid gap-6">
        <div>
          <NewsHeadline>Featured Stories</NewsHeadline>
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
        </div>
        <div className="h-64 bg-teal-500"></div>
        <div className="h-64 bg-orange-500"></div>
      </div>
    </div>
  );
};

export default News;
