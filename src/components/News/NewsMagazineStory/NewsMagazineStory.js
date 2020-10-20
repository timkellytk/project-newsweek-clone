import React from 'react';
import Qanon from '../../../img/qanon.jpg';

const NewsMagazineStory = () => {
  return (
    <article>
      <a href="#empty">
        <img
          className=" h-64 w-full object-center object-cover"
          src={Qanon}
          alt="Qanon letter"
        />
      </a>
      <header class="mt-2">
        <span className="uppercase bg-primary text-white py-1 px-2 font-bold tracking-tighter">
          Cover
        </span>
        <a
          href="#empty"
          className="uppercase ml-3 font-bold text-primary tracking-tighter"
        >
          Tech & Science
        </a>
        <a href="#empty">
          <h4
            className="mt-2 text-lg font-bold tracking-tighter leading-tight hover:underline"
            style={{ textDecorationColor: 'red' }}
          >
            As QAnon Conspiracies Spread, Scientists Fight a Misinformation
            Pandemic
          </h4>
        </a>
      </header>
    </article>
  );
};

export default NewsMagazineStory;
