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
import NewsGrid4 from './NewsGrid4/NewsGrid4';
import NewsCategory from './NewsCategory/NewsCategory';
import NewsCTAs from './NewsCTAs/NewsCTAs';

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
        <NewsGrid4>
          <NewsCoverIssue />
          <NewsMagazineStory />
          <NewsMagazineStory />
          <NewsMagazineStory />
          <NewsMagazineStory />
          <NewsMagazineStory />
          <NewsMagazineStory />
          <NewsMagazineStory />
        </NewsGrid4>
      </section>
      <section className="mt-12">
        <NewsSectionTitle>Editors Pick</NewsSectionTitle>
        <NewsGrid4>
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
          <NewsStory />
        </NewsGrid4>
      </section>
      <section className="my-8 py-8 border-gray-400 border-t">
        <NewsCategory title="U.S." />
      </section>
      <section className="my-8 py-8 border-gray-400 border-t">
        <NewsCategory title="World" />
      </section>
      <section className="my-8 py-8 border-gray-400 border-t">
        <NewsCategory title="Business" />
      </section>
      <section className="my-8 py-8 border-gray-400 border-t">
        <NewsCategory title="Tech & Science" />
      </section>
      <section className="my-8 py-8 border-gray-400 border-t">
        <NewsCategory title="Culture" />
      </section>
      <section className="my-8 py-8 border-gray-400 border-t">
        <NewsCategory title="Sports" />
      </section>
      <section>
        <NewsCTAs />
      </section>
    </div>
  );
};

export default News;
