import React from "react";
const AboutUsImageGrid = ({ parentClass, images }) => {
  return (
    <>
      {images &&
        images.map((image, index) => {
          return (
            <div key={index} className={parentClass + "_img-" + index}>
              <img src={image} alt="" />
              <p className="body-global">Lamia Hafiz</p>
            </div>
          );
        })}
    </>
  );
};

export default AboutUsImageGrid;
