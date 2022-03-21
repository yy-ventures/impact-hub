import React from "react";
const AboutUsImageGrid = ({ parentClass, images }) => {
  return (
    <>
      {images &&
        images.map((image, index) => {
          return (
            <div key={index} className={parentClass + "_img-" + index}>
              <img src={image} alt="" />
            </div>
          );
        })}
    </>
  );
};

export default AboutUsImageGrid;
