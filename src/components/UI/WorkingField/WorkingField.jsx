import React, { useState } from "react";
import classes from "./WorkingField.module.css"
import Draggable from "react-draggable";

const WorkingField = ({ divArr, displayMethod, setDivArr, classPack }) => {

  const changeStyle = (index) => {
    if (displayMethod === "class") {
      const updatedDivArr = divArr.map((div, i) => {
        if (i === index) {
          let classStyles = classPack;
          delete classStyles.className
          return { ...div, style: classStyles };
        }
        return div;
      });
      setDivArr(updatedDivArr);
    }
  }

  return (
    <div className={classes.work__field}>
      {divArr.map(div =>
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
        >
          <div className={classes.draggable__div} key={div.index} style={div.style} onClick={() => changeStyle(div.index)}>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default WorkingField