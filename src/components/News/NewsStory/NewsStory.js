import React from 'react';
import ImageTag from '../../Utility/ImageTag/ImageTag';
import DonaldTrump from '../../../img/donald-trump.jpg';

const NewsStory = () => {
  return (
    <article className="pb-4">
      <a href="empty">
        <ImageTag image={DonaldTrump} tag="U.S." />
      </a>
      <header>
        <a href="#empty">
          <h5
            className="text-xl font-bold leading-tight tracking-tight mt-2 hover:underline"
            style={{
              textDecorationColor: 'red',
            }}
          >
            Trump Will Run Again in 2024 if He Loses to Biden, Says Steve Bannon
          </h5>
        </a>
        <p className="mt-2 text-sm">
          "You're not going to see the end of Donald Trump," the former White
          House strategist told The Australian in a piece published Sunday.
        </p>
      </header>
    </article>
  );
};

export default NewsStory;
