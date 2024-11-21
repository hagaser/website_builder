import React, { useState } from "react";

// styles //
import classes from "./Panel.module.css";

// components //
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import ClassPanel from "../../ClassPanel";


const Panel = ({

  elements, dispatchElements,

  setDeletedClass,
  classArr, setClassArr, 
  chosenClassOrAction, setChosenClassOrAction,

  displayMethod, setDisplayMethod,

}) => {

  
  const [displayPanel, setDisplayPanel] = useState(true);

  const rootClasses = [classes.panel__block]; // changes display to none
  if (!displayPanel) rootClasses.push(classes.hiden__block);


  const renderButtonPanel = () => (
    <ButtonPanel
      elements = {elements}
      dispatchElements = {dispatchElements}

      classArr = {classArr}
      chosenClassOrAction = {chosenClassOrAction}
      setChosenClassOrAction = {setChosenClassOrAction}

      setDisplayMethod = {setDisplayMethod}
    />
  )

  const renderClassPanel = () => (
    <ClassPanel
    setDisplayMethod = {setDisplayMethod}
    setDeletedClass = {setDeletedClass}

    classArr = {classArr}
    setClassArr = {setClassArr}

    chosenClassOrAction = {chosenClassOrAction}
    setChosenClassOrAction = {setChosenClassOrAction}
  />
  )


  return (
    <div className={rootClasses.join(" ")}>

      {displayPanel
      ? 
        <div className={classes.panel}>

          {displayMethod === "buttons" && renderButtonPanel()}

          {displayMethod === "class" && renderClassPanel()}

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