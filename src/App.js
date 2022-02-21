import "./App.css";
import React, { useState } from "react";
import SingleBox from "./components/singleBox/singleBox";
import initialObjectFormer from "./formInitialObject";

const App = () => {
  const [boxesInfo, setboxesInfo] = useState(initialObjectFormer());
  const [clickedNumber, setClickedNumber] = useState(0);
  const [redColoredBoxes, setRedColoredBoxes] = useState([]);
  const boxArray = [...Array(16)].map((_, index) => index + 1);

  const onBoxClick = (boxNumber) => {
    if (!boxesInfo[boxNumber].clickedNumber) {
      const newBoxesInfo = { ...boxesInfo };
      newBoxesInfo[boxNumber].clickedNumber = clickedNumber + 1;
      setboxesInfo(newBoxesInfo);
      setClickedNumber(clickedNumber + 1);
    }

    const newColorBoxes = [...redColoredBoxes];
    if (redColoredBoxes.length < 2) {
      newColorBoxes.push(boxNumber);
    } else {
      newColorBoxes[0] = newColorBoxes[1];
      newColorBoxes[1] = boxNumber;
    }

    setRedColoredBoxes(newColorBoxes);
  };

  return (
    <div className="App">
      <div className="all-boxes-grid">
        {boxArray.map((singleEle) => (
          <SingleBox
            key={singleEle}
            boxNumber = {singleEle}
            clickedNumber={boxesInfo?.[singleEle]?.clickedNumber}
            isRed={
              redColoredBoxes[0] === singleEle ||
              redColoredBoxes[1] === singleEle
            }
            onClick={onBoxClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
