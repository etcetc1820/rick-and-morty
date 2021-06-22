import React from "react";

import "./loader.scss";

const Loader = (): JSX.Element => {
  return (
    <div className="container">
      <div className="loader">
        <div className="circle" id="a" />
        <div className="circle" id="b" />
        <div className="circle" id="c" />
      </div>
      <div className="caption">We are almost there...</div>
    </div>
  );
};

export default Loader;
