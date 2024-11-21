import React, { memo } from "react";

// styles //
import classes from "./ButtonPanel.module.css";

// components //
import MyButton from "../MyButton/MyButton";

// utils //
import { getCode } from "../../../utils/getCode";
import { useFillButtonData } from "../../../hooks/useFillButtonData";

// other //
import { saveAs } from "file-saver";


const ButtonPanel = memo(({
  elements, dispatchElements,

  chosenClassOrAction, setChosenClassOrAction,

  setDisplayMethod,
  classArr,
}) => {

  const saveFile = () => {
    const code = getCode(elements, classArr);
    const fileName = "file.html";
    // file with {content = code} and {name = fileName}
    const blob = new Blob([code], { type: "text/plain" });
    saveAs(blob, fileName);
  };

  const setDisplay = () => {
    setChosenClassOrAction("");
    setDisplayMethod("class");
  };

  const componentsButtons = useFillButtonData(dispatchElements);
  

  const otherButtons = [
    {name: "add class", function: setDisplay},
    {name: "save", function: saveFile},
  ];

  return (
    <div className={classes.button__panel}>

      {/* left button panel */}
      <div className={classes.button__div}>

        {/* delete element button */}

          <MyButton
            {...(chosenClassOrAction === "delete element"
              ? {className: classes.chosen__btn,
                onClick: () => setChosenClassOrAction("")}

              : {onClick: () => setChosenClassOrAction("delete element")})
            }
          >
            delete element
          </MyButton>

        {/* components buttons */}
        {componentsButtons.map(btn =>

          <MyButton 
            key={btn.name}
            onClick = {() => btn.function()}
          >
            &lt;{btn.name}&gt;
          </MyButton>

        )}
      </div>

      {/* right button panel */}
      <div className={classes.button__div}>
        {otherButtons.map(btn =>

          <MyButton
            key={btn.name}
            onClick = {() => btn.function()}
          >
            {btn.name}
          </MyButton>

        )}
      </div>

    </div>
  );
});

export default ButtonPanel;