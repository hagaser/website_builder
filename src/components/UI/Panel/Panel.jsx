import React, { useState } from "react";

// styles //
import classes from "./Panel.module.css";

// components //
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import ClassPanel from "../../ClassPanel";

const Panel = ({

  // to ButtonPanel //
  divs, inputBlocks, buttonBlocks, textBlocks, // number of array elements
  divArr, inputArr, buttonArr, textBlockArr, // arrays of elements
  setDivs, setInputBlocks, setButtonBlocks, setTextBlocks, // change the number of array elements
  // end to ButtonPanel //

  // to ClassPanel //
  setClassArr, chosenClass, setChosenClass,

  // to both //
  setDisplayMethod, classArr,

  // to noone //
  displayMethod,

}) => {
  
  const [displayPanel, setDisplayPanel] = useState(true);

  const rootClasses = [classes.panel__block]; // changes display to none
  if (!displayPanel) rootClasses.push(classes.hiden__block);

  return (
    <div className={rootClasses.join(" ")}>

      {displayPanel
      ? 
        <div className={classes.panel}>

          {displayMethod === "buttons" &&
            <ButtonPanel

              // number of array elements //
              divs = {divs}
              inputBlocks = {inputBlocks}
              buttonBlocks = {buttonBlocks}
              textBlocks = {textBlocks}

              // arrays of elements //
              divArr = {divArr}
              inputArr = {inputArr}
              buttonArr = {buttonArr}
              textBlockArr = {textBlockArr}

              // change the number of array elements //
              setDivs = {setDivs}
              setInputBlocks = {setInputBlocks}
              setButtonBlocks = {setButtonBlocks}
              setTextBlocks = {setTextBlocks}

              // other //
              setDisplayMethod = {setDisplayMethod}
              classArr = {classArr}

            />
          }

          {displayMethod === "class" &&
            <ClassPanel
              setDisplayMethod = {setDisplayMethod}

              classArr = {classArr}
              setClassArr = {setClassArr}

              chosenClass = {chosenClass}
              setChosenClass = {setChosenClass}
            />
          }

        </div>
      : 
        <div className={classes.hiden__panel}></div>
      }

      {displayPanel

      ? <button
          className={classes.hide__panel}
          onClick={() => setDisplayPanel(false)}
        > {/* "<" button */}
          &lt;
        </button>

      : <button
          className={classes.hide__panel}
          onClick={() => setDisplayPanel(true)}
        > {/* ">" button */}
          &gt;
        </button>

      }

    </div>
  );
};

export default Panel;