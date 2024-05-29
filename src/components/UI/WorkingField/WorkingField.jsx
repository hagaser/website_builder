import React, { useEffect } from "react";
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

  useEffect(() => {
    divArr.forEach(divEl => {
      const coordinate = (divEl.ref.current.style.transform).match(/translate\(([^,]+), ([^)]+)\)/)
      const styles = " " + Object.entries(divEl.style).map(([property, value]) => `${property}: ${value};`).join(' ')
      console.log(`<div style="position: absolute; left: ${coordinate[1]}; top: ${coordinate[2]}; background-color: #0074D9; width: 100px; height: 100px;${styles}"></div>`)
    });
  }, [divArr])

  return (
    <div className={classes.work__field}>
      {divArr.map(div =>
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
        >
          <div className={classes.draggable__div} key={div.index} style={div.style} ref={div.ref} onClick={() => changeStyle(div.index)}>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default WorkingField