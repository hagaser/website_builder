import React, { useEffect } from "react";
import classes from "./WorkingField.module.css";
import Draggable from "react-draggable";

const WorkingField = ({
  // arrays of elements //
  divArr, textBlockArr, inputArr, buttonArr,

  // change the arrays of elements //
  setDivArr, setTextBlockArr, setInputArr, setButtonArr,

  // other //
  displayMethod, chosenClass, classArr, delDeletedStyle, deletedClass,
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
  const changeEl = (index, elArr, elFunc) => {
    // if some class is chosen
    if (chosenClass) {
      const updatedElArr = elArr.map((el, i) => {

        // if class deleted in general //
        if (typeof(index) === "string") {
          if (index === el.class) {
            return { ...el, // return default styles
                      style: { ...el.defStyle },
                      class: "" };
          }
          return el;
        }

        if (i === index) { // if changed element

          if (displayMethod === "buttons") {
          // if current panel is ButtonPanel
            if (chosenClass === "delete element") {
              return { deleted: true };
            }
          }

          if (displayMethod === "class") {
          // if current panel is ClassPanel
            if (chosenClass === "delete class") {
              return { ...el, // return default styles
                      style: { ...el.defStyle },
                      class: "" };
            }

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

        }
        return el; // if not changed element
      });
      elFunc(updatedElArr);
    }
  }

  // if class deleted in general //
  useEffect(() => {
    if (deletedClass) {
      delDeletedStyle(
        [divArr, textBlockArr, inputArr, buttonArr],
        [setDivArr, setTextBlockArr, setInputArr, setButtonArr],
        changeEl
      );
    }
  },[deletedClass]);

  return (
    <div className={classes.work__field}>
      
      {divArr.map(div =>
        !div.deleted &&
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
            key={div.index}
        >
          <div
            className={classes.draggable__div + " " + classes.draggable}
            style={div.style}
            ref={div.ref}
            onClick={() => changeEl(div.index, divArr, setDivArr)}
          >
          </div>
        </Draggable>
      )}

      {inputArr.map(inp =>
        !inp.deleted &&
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
            key={inp.index}
        >
          <input
            className={classes.draggable__inp + " " + classes.draggable}
            style={inp.style}
            ref={inp.ref}
            onClick={() => changeEl(inp.index, inputArr, setInputArr)}
          >
          </input>
        </Draggable>
      )}

      {buttonArr.map(btn =>
        !btn.deleted &&
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
            key={btn.index}
        >
          <textarea
            className={classes.draggable__btn + " " + classes.draggable}
            style={btn.style}
            ref={btn.ref}
            onClick={() => changeEl(btn.index, buttonArr, setButtonArr)}
            onChange={(e) => handleInputChange(e, btn.index, buttonArr, setButtonArr)}
            value={btn.value}
          >
          </textarea>
        </Draggable>
      )}

      {textBlockArr.map(textBlock =>
        !textBlock.deleted &&
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
            key={textBlock.index}
        >
          <textarea
            className={classes.draggable__text + " " + classes.draggable}
            style={textBlock.style}
            ref={textBlock.ref}
            onClick={() => changeEl(textBlock.index, textBlockArr, setTextBlockArr)}
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