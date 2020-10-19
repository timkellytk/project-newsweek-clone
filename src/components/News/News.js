import React from 'react';
import DonaldTrump from '../../img/donald-trump.jpg';

const News = () => {
  return (
    <div className="p-6">
      <div className="news-grid gap-6">
        <div>
          <h5 className="uppercase text-gray-500 font-bold tracking-tight mb-2">
            Featured Stories
          </h5>
          <article>
            <img
              src={DonaldTrump}
              className="object-cover object-center"
              alt="Donald Trump"
            ></img>
            <header>
              <h5 className="text-xl font-bold leading-snug tracking-tight mt-2">
                Trump Will Run Again in 2024 if He Loses to Biden, Says Steve
                Bannon
              </h5>
              <p className="mt-2">
                "You're not going to see the end of Donald Trump," the former
                White House strategist told The Australian in a piece published
                Sunday.
              </p>
            </header>
          </article>
        </div>
        <div className="h-64 bg-teal-500"></div>
        <div className="h-64 bg-orange-500"></div>
      </div>
    </div>
  );
};

export default News;
