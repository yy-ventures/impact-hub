import React from "react";

const BannerSvg = ({ type, className }) => {
  return type === "define" ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.113 316.641">
      <path
        id="Vector_14"
        data-name="Vector 14"
        d="M145.211,1.224c19.508-.253,60.145,8.565,66.631,45.866,8.107,46.627,52.909,108.509-22.153,161.924C152.5,235.476,43.913,261.558,12.033,168.082-19.558,75.45,19.8,69.137,30.7,47.091S85.421-6.632,145.211,1.224Z"
        transform="matrix(-0.485, -0.875, 0.875, -0.485, 112.713, 316.641)"
        fill="#aae148"
      />
    </svg>
  ) : type == "empathize" ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.49 233.701">
      <path
        id="Vector_14"
        data-name="Vector 14"
        d="M145.211,1.224c19.508-.253,60.145,8.565,66.631,45.866,8.107,46.627,52.909,108.509-22.153,161.924C152.5,235.476,43.913,261.558,12.033,168.082-19.558,75.45,19.8,69.137,30.7,47.091S85.421-6.632,145.211,1.224Z"
        transform="translate(232.49 233.701) rotate(-180)"
        fill="#ff8e3d"
      />
    </svg>
  ) : type == "ideate" ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237.723 236.533">
      <path
        id="Vector_14"
        data-name="Vector 14"
        d="M145.211,1.224c19.508-.253,60.145,8.565,66.631,45.866,8.107,46.627,52.909,108.509-22.153,161.924C152.5,235.476,43.913,261.558,12.033,168.082-19.558,75.45,19.8,69.137,30.7,47.091S85.421-6.632,145.211,1.224Z"
        transform="translate(0 232.455) rotate(-89)"
        fill="#60ebff"
      />
    </svg>
  ) : type == "prototype" ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.752 263.783">
      <path
        id="Vector_14"
        data-name="Vector 14"
        d="M145.211,1.224c19.508-.253,60.145,8.565,66.631,45.866,8.107,46.627,52.909,108.509-22.153,161.924C152.5,235.476,43.913,261.558,12.033,168.082-19.558,75.45,19.8,69.137,30.7,47.091S85.421-6.632,145.211,1.224Z"
        transform="matrix(0.99, 0.139, -0.139, 0.99, 32.525, 0)"
        fill="#ffce28"
      />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328.318 328.467">
      <path
        id="Vector_14"
        data-name="Vector 14"
        d="M145.211,1.224c19.508-.253,60.145,8.565,66.631,45.866,8.107,46.627,52.909,108.509-22.153,161.924C152.5,235.476,43.913,261.558,12.033,168.082-19.558,75.45,19.8,69.137,30.7,47.091S85.421-6.632,145.211,1.224Z"
        transform="translate(0 149.442) rotate(-40)"
        fill="#ee0b4f"
      />
    </svg>
  );
};

export default BannerSvg;
