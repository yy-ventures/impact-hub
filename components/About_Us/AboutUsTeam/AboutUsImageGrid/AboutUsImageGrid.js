import React from "react";
const AboutUsImageGrid = ({ parentClass, members }) => {
  const baseUrlForImages = process.env.baseUrlForImages;
  return (
    <>
      {members &&
        members.map(({ id, name, designation, email, profile, image_path }, index) => {
          return (
            <div key={id} className={parentClass + "_grid-child"}>
              <img src={baseUrlForImages + image_path} alt="" />
              <h4 className="name body-global">{name}</h4>
              <p className="designation body-global">{designation}</p>
            </div>
          );
        })}
    </>
  );
};

export default AboutUsImageGrid;
