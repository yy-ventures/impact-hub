import React from "react";
const AboutUsImageGrid = ({ parentClass, members }) => {
  const baseUrlForImages = process.env.baseUrlForImages;
  return (
    <>
      {members &&
        members.map(({ id, name, designation, email, profile, image_path }, index) => {
          return (
            <div key={id} className={parentClass + "_img-" + index}>
              <img src={baseUrlForImages + image_path} alt="" />
              <p className="body-global">{name}</p>
              <p className="body-global">{designation}</p>
            </div>
          );
        })}
    </>
  );
};

export default AboutUsImageGrid;
