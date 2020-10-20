import React from 'react';
import NewsStory from './NewsStory/NewsStory';
import NewsStorySmall from './NewsStorySmall/NewsStorySmall';
import NewsHeadline from './NewsHeadline/NewsHeadline';
import NewsGrid3 from './NewsGrid3/NewsGrid3';
import NewsDebate from './NewsDebate/NewsDebate';
import NewsOpinion from './NewsOpinion/NewsOpinion';
import NewsArticleSignup from './NewsArticleSignup/NewsArticleSignup';
import NewsSectionTitle from './NewsSectionTitle/NewsSectionTitle';
import NewsCoverIssue from './NewsCoverIssue/NewsCoverIssue';
import NewsMagazineStory from './NewsMagazineStory/NewsMagazineStory';

const News = () => {
  return (
    <div className="p-6">
      <section className="news-grid gap-6 items-start">
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
      </section>
      <section className="mt-12">
        <NewsSectionTitle>In The Magazine</NewsSectionTitle>
        <div className="grid grid-cols-4 gap-8 items-end">
          <NewsCoverIssue />
          <NewsMagazineStory />
          <NewsMagazineStory />
          <NewsMagazineStory />
          <NewsMagazineStory />
          <NewsMagazineStory />
          <NewsMagazineStory />
          <NewsMagazineStory />
        </div>
      </section>
      <section className="mt-12">
        <NewsSectionTitle>Editors Pick</NewsSectionTitle>
        <div className="grid grid-cols-4 gap-8 items-end">
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
        </div>
      </section>
    </div>
  );
};

export default News;
