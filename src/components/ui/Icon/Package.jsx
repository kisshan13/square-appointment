import React from "react";

const Package = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="#07794C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 3H4.8A1.8 1.8 0 003 4.8v14.4A1.8 1.8 0 004.8 21h14.4a1.8 1.8 0 001.8-1.8V4.8A1.8 1.8 0 0019.2 3h-4.5v9L12 10.65 9.3 12V3z"
          fill="#07794C"
        ></path>
      </svg>
    </div>
  );
};

export default Package;
