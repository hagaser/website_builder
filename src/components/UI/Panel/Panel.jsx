import React, { useState } from "react";
import classes from "./Panel.module.css";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import ClassPanel from "../ClassPanel/ClassPanel";

const Panel = ({ inputArr, buttonArr, inputBlocks, setInputBlocks, buttonBlocks, setButtonBlocks, setDivs, divs, displayMethod, setDisplayMethod, divArr, classArr, setClassArr, chosenClass, setChosenClass, setTextBlocks, textBlocks, textBlockArr }) => {
  
  const [displayPanel, setDisplayPanel] = useState(true);

  const rootClasses = [classes.panel__block];
  if (!displayPanel) rootClasses.push(classes.hiden__block);

  return (
    <div className={rootClasses.join(" ")}>

      {displayPanel
      ? 
        <div className={classes.panel}>

          {displayMethod === "buttons" &&
            <ButtonPanel
              setDivs={setDivs}
              divs={divs}
              setDisplayMethod={setDisplayMethod}
              divArr = {divArr}
              classArr = {classArr}
              setTextBlocks = {setTextBlocks}
              textBlocks = {textBlocks}
              textBlockArr = {textBlockArr}
              inputBlocks = {inputBlocks}
              setInputBlocks = {setInputBlocks}
              buttonBlocks = {buttonBlocks}
              setButtonBlocks = {setButtonBlocks}
              inputArr = {inputArr}
              buttonArr = {buttonArr}
            />
          }

          {displayMethod === "class" &&
            <ClassPanel
              setDisplayMethod={setDisplayMethod}
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
        >
          &lt;
        </button>

      : <button
          className={classes.hide__panel}
          onClick={() => setDisplayPanel(true)}
        >
          &gt;
        </button>

      }

    </div>
  );
};

export default Panel