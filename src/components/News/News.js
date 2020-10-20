import React from 'react';
import NewsStory from './NewsStory/NewsStory';
import NewsStorySmall from './NewsStorySmall/NewsStorySmall';
import NewsHeadline from './NewsHeadline/NewsHeadline';
import NewsGrid3 from './NewsGrid3/NewsGrid3';
import NewsDebate from './NewsDebate/NewsDebate';
import NewsOpinion from './NewsOpinion/NewsOpinion';
import NewsArticleSignup from './NewsArticleSignup/NewsArticleSignup';

const News = () => {
  return (
    <div className="p-6">
      <div className="news-grid gap-6 items-start">
        <div className="news-grid__sticky-col-1">
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
            <NewsStorySmall />
            <NewsStorySmall />
            <NewsStorySmall />
          </div>
        </div>
        <div className="news-grid__sticky-col-3">
          <NewsHeadline>The Debate</NewsHeadline>
          <NewsDebate />
          <NewsHeadline>Opinion</NewsHeadline>
          <NewsOpinion first />
          <NewsOpinion />
          <NewsArticleSignup />
        </div>
      </div>
    </div>
  );
};

export default News;
