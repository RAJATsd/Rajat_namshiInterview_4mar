import "./singleBox.css";

import React from "react";

const SingleBox = ({ boxNumber, clickedNumber, isRed, onClick }) => {
  return <div onClick={()=>onClick(boxNumber)} className={`single-box-container ${isRed?'red-one':''}`}>
      {clickedNumber ? `Box ${clickedNumber}`:null}
  </div>;
};

export default SingleBox;
