import React from "react";
import classes from "./WorkingField.module.css"
import Draggable from "react-draggable";

const WorkingField = ({ divArr, displayMethod, setDivArr, chosenClass, classArr, setTextBlockArr, textBlockArr, setInputArr, inputArr, setButtonArr, buttonArr }) => {

  const handleInputChange = (e, textIndex, arr, func) => {
    const updatedArr = arr.map((textBlock) =>
      textBlock.index === textIndex ? { ...textBlock, value: e.target.value } : textBlock
    );
    func(updatedArr);
  };

  const changeStyle = (index, elArr, elName) => {
    if (displayMethod === "class" && chosenClass) {
      const updatedElArr = elArr.map((el, i) => {
        if (i === index) {
          let classStyles = {...classArr.find(item => item.className === chosenClass)};
          delete classStyles.className
          const newClass = chosenClass
          return { ...el, style: { ...el.style, ...classStyles }, class: newClass };
        }
        return el;
      });
      if (elName === "div") {
        setDivArr(updatedElArr);
      }
      if (elName === "text") {
        setTextBlockArr(updatedElArr);
      }
      if (elName === "inp") {
        setInputArr(updatedElArr);
      }
      if (elName === "btn") {
        setButtonArr(updatedElArr);
      }
    }
  }

  return (
    <div className={classes.work__field}>
      
      {divArr.map(div =>
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
            key={div.index}
        >
          <div className={classes.draggable__div} style={div.style} ref={div.ref} onClick={() => changeStyle(div.index, divArr, "div")}>
          </div>
        </Draggable>
      )}

      {inputArr.map(inp =>
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
            key={inp.index}
        >
          <input className={classes.draggable__inp} style={inp.style} ref={inp.ref} onClick={() => changeStyle(inp.index, inputArr, "inp")}>
          </input>
        </Draggable>
      )}

      {buttonArr.map(btn =>
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
            key={btn.index}
        >
          <textarea className={classes.draggable__btn} style={btn.style} ref={btn.ref} onClick={() => changeStyle(btn.index, buttonArr, "btn")} onChange={(e) => handleInputChange(e, btn.index, buttonArr, setButtonArr)} value={btn.value}>
          </textarea>
        </Draggable>
      )}

      {textBlockArr.map(textBlock =>
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
            key={textBlock.index}
        >
          <textarea className={classes.draggable__text} style={textBlock.style} ref={textBlock.ref} onClick={() => changeStyle(textBlock.index, textBlockArr, "text")} onChange={(e) => handleInputChange(e, textBlock.index, textBlockArr, setTextBlockArr)} value={textBlock.value}>
          </textarea>
        </Draggable>
      )}

    </div>
  );
};

export default WorkingField