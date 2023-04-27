import React from "react";

export const LogoMasterCraft = () => {
  return (
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle fill="#000" cx="28" cy="28" r="28" />
        <g fillRule="nonzero">
          <path
            d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
            fill="#444"
          />
          <path
            d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
            fill="#FFF"
          />
        </g>
      </g>
    </svg>
  );
};

export const IconCheck = () => {
  return (
    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
        <path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24" />
      </g>
    </svg>
  );
};

export const IconBookMark = ({ circleFill, pathFill }) => {
  return (
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle fill={circleFill} cx="28" cy="28" r="28" />
        <path fill={pathFill} d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
};

export const IconHamburger = () => {
  return (
    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
      </g>
    </svg>
  );
};

export const IconMenuClose = ({ fillColor }) => {
  return (
    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
      <g fill={fillColor} fillRule="evenodd">
        <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
        <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
      </g>
    </svg>
  );
};

export const IconDollar = ({className}) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.5 9C14.5 9 13.7609 8 11.9999 8C8.49998 8 8.49998 12 11.9999 12C15.4999 12 15.5 16 12 16C10.5 16 9.5 15 9.5 15"
        stroke="#323232"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7V17"
        stroke="#323232"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
