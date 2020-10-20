import React from 'react';
import LogoN from '../../Utility/LogoN/LogoN';
import Divider from '../../Utility/Divider/Divider';

const NewsSectionTitle = (props) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <LogoN />
        <h5 className="text-lg uppercase tracking-tight font-bold ml-3">
          {props.children}
        </h5>
      </div>
      <Divider />
    </>
  );
};

export default NewsSectionTitle;
