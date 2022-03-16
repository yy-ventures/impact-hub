import React from "react";

const TitleBlock = ({ title, shape, parentClass }) => {
  return (
    <>
      <div className={`${parentClass}_title_block_container`}>
        <img src={shape} />
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default TitleBlock;
