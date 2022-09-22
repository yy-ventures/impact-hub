import React from "react";

const TitleBlock = ({ title, shape, parentClass, size }) => {
  return (
    <div className={`${parentClass}_title_block title_block_container ${size === "small" ? "size_small" : ""}`}>
      <img src={shape} />
      <h1>{title}</h1>
    </div>
  );
};

export default TitleBlock;
