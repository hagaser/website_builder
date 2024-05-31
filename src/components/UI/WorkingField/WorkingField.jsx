import React from "react";
import classes from "./WorkingField.module.css";
import Draggable from "react-draggable";

const WorkingField = ({
  // arrays of elements //
  divArr, textBlockArr, inputArr, buttonArr,

  // change the arrays of elements //
  setDivArr, setTextBlockArr, setInputArr, setButtonArr,

  // other //
  displayMethod, chosenClass, classArr,
}) => {

  // gets input values and update them //
  const handleInputChange = (e, textIndex, arr, func) => {
    const updatedArr = arr.map((textBlock) =>
      // if input value changed then update state, else return old
      textBlock.index === textIndex 
      ? { ...textBlock, value: e.target.value }
      : textBlock
    );
    func(updatedArr);
  };

  // applies styles and adds classes //
  const changeStyle = (index, elArr, elFunk) => {
    // if current panel is ClassPanel and some class is chosen
    if (displayMethod === "class" && chosenClass) {
      const updatedElArr = elArr.map((el, i) => {
        if (i === index) { // if changed element

          let classStyles = // get class by name chosenClass
          {...classArr.find(item => item.className === chosenClass)};
          delete classStyles.className; // only styles stayed
          if (el.defStyle) {
            return { ...el, // return updated element
                    style: { ...el.defStyle, ...classStyles },
                    class: chosenClass };
          }
          return { ...el, // return updated element
                  style: { ...classStyles },
                  class: chosenClass };
        }
        return el; // if not changed element
      });
      elFunk(updatedElArr);
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
          <div
            className={classes.draggable__div + " " + classes.draggable}
            style={div.style}
            ref={div.ref}
            onClick={() => changeStyle(div.index, divArr, setDivArr)}
          >
          </div>
        </Draggable>
      )}

      {inputArr.map(inp =>
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
            key={inp.index}
        >
          <input
            className={classes.draggable__inp + " " + classes.draggable}
            style={inp.style}
            ref={inp.ref}
            onClick={() => changeStyle(inp.index, inputArr, setInputArr)}
          >
          </input>
        </Draggable>
      )}

      {buttonArr.map(btn =>
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
            key={btn.index}
        >
          <textarea
            className={classes.draggable__btn + " " + classes.draggable}
            style={btn.style}
            ref={btn.ref}
            onClick={() => changeStyle(btn.index, buttonArr, setButtonArr)}
            onChange={(e) => handleInputChange(e, btn.index, buttonArr, setButtonArr)}
            value={btn.value}
          >
          </textarea>
        </Draggable>
      )}

      {textBlockArr.map(textBlock =>
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
            key={textBlock.index}
        >
          <textarea
            className={classes.draggable__text + " " + classes.draggable}
            style={textBlock.style}
            ref={textBlock.ref}
            onClick={() => changeStyle(textBlock.index, textBlockArr, setTextBlockArr)}
            onChange={(e) => handleInputChange(e, textBlock.index, textBlockArr, setTextBlockArr)}
            value={textBlock.value}
          >
          </textarea>
        </Draggable>
      )}

    </div>
  );
};

export default WorkingField;