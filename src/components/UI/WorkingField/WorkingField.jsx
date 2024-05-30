import React from "react";
import classes from "./WorkingField.module.css"
import Draggable from "react-draggable";

const WorkingField = ({ divArr, displayMethod, setDivArr, chosenClass, classArr }) => {

  const changeStyle = (index, elArr, elName) => {
    if (displayMethod === "class" && chosenClass) {
      const updatedelArr = elArr.map((el, i) => {
        if (i === index) {
          let classStyles = {...classArr.find(item => item.className === chosenClass)};
          delete classStyles.className
          const newClass = chosenClass
          return { ...el, style: classStyles, class: newClass };
        }
        return el;
      });
      if (elName === "div") {
        setDivArr(updatedelArr);
      }
    }
  }

  return (
    <div className={classes.work__field}>
      {divArr.map(div =>
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
        >
          <div className={classes.draggable__div} key={div.index} style={div.style} ref={div.ref} onClick={() => changeStyle(div.index, divArr, "div")}>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default WorkingField