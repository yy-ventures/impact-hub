import React from "react";

const BannerSvg = ({ type, className }) => {
  return type === "define" ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.5 234.5">
      <path
        id="Vector_14"
        data-name="Vector 14"
        d="M145.211,1.224c19.508-.253,60.145,8.565,66.631,45.866,8.107,46.627,52.909,108.509-22.153,161.924C152.5,235.476,43.913,261.558,12.033,168.082-19.558,75.45,19.8,69.137,30.7,47.091S85.421-6.632,145.211,1.224Z"
        transform=""
        fill="#aae148"
      />
    </svg>
  ) : type == "empathize" ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.5 234.5" transform="rotate(-180)">
      <path
        id="Vector_14"
        data-name="Vector 14"
        d="M145.211,1.224c19.508-.253,60.145,8.565,66.631,45.866,8.107,46.627,52.909,108.509-22.153,161.924C152.5,235.476,43.913,261.558,12.033,168.082-19.558,75.45,19.8,69.137,30.7,47.091S85.421-6.632,145.211,1.224Z"
        transform=""
        fill="#ff8e3d"
      />
    </svg>
  ) : type == "ideate" ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.5 234.5" transform="rotate(-89)">
      <path
        id="Vector_14"
        data-name="Vector 14"
        d="M145.211,1.224c19.508-.253,60.145,8.565,66.631,45.866,8.107,46.627,52.909,108.509-22.153,161.924C152.5,235.476,43.913,261.558,12.033,168.082-19.558,75.45,19.8,69.137,30.7,47.091S85.421-6.632,145.211,1.224Z"
        transform=""
        fill="#60ebff"
      />
    </svg>
  ) : type == "prototype" ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.5 234.5">
      <path
        id="Vector_14"
        data-name="Vector 14"
        d="M145.211,1.224c19.508-.253,60.145,8.565,66.631,45.866,8.107,46.627,52.909,108.509-22.153,161.924C152.5,235.476,43.913,261.558,12.033,168.082-19.558,75.45,19.8,69.137,30.7,47.091S85.421-6.632,145.211,1.224Z"
        transform=""
        fill="#ffce28"
      />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.5 234.5">
      <path
        id="Vector_14"
        data-name="Vector 14"
        d="M145.211,1.224c19.508-.253,60.145,8.565,66.631,45.866,8.107,46.627,52.909,108.509-22.153,161.924C152.5,235.476,43.913,261.558,12.033,168.082-19.558,75.45,19.8,69.137,30.7,47.091S85.421-6.632,145.211,1.224Z"
        transform=""
        fill="#ee0b4f"
      />
    </svg>
  );
};

export default BannerSvg;
