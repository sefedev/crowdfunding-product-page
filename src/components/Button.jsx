import React from "react";

const Button = (props) => {
    const className = `relative hover:bg-DarkCyan transition duration-150 px-6 py-4 text-sm text-White rounded-3xl ${props.className}`
  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
