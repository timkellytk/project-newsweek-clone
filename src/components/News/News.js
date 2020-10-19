import React from 'react';
import NewsStory from './NewsStory/NewsStory';
import NewsStorySmall from './NewsStorySmall/NewsStorySmall';
import NewsHeadline from './NewsHeadline/NewsHeadline';
import NewsGrid3 from './NewsGrid3/NewsGrid3';

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
        <div>
          <NewsHeadline>Top Story</NewsHeadline>
          <NewsStory />
          <NewsStorySmall />
          <NewsGrid3>My Turn</NewsGrid3>
          <NewsGrid3>Culture & Travel</NewsGrid3>
          <div className="mt-12">
            <NewsHeadline>More Stories</NewsHeadline>
            <NewsStorySmall />
            <NewsStorySmall />
            <NewsStorySmall />
            <NewsStorySmall />
            <NewsStorySmall />
            <NewsStorySmall />
            <NewsStorySmall />
            <NewsStorySmall />
            <NewsStorySmall />
          </div>
        </div>
        <div className="">
          <NewsHeadline>The Debate</NewsHeadline>
        </div>
      </div>
    </div>
  );
};

export default News;
