import React from "react";

// styles //
import classes from "./ButtonPanel.module.css";

// components //
import MyButton from "../MyButton/MyButton";

// utils //
import { getCode } from "../../../utils/getCode";

// other //
import { saveAs } from 'file-saver';


const ButtonPanel = ({
  // number of array elements //
  divs,
  inputBlocks,
  buttonBlocks,
  textBlocks,

  // arrays of elements //
  divArr,
  inputArr,
  buttonArr,
  textBlockArr,

  // change the number of array elements //
  setDivs,
  setInputBlocks,
  setButtonBlocks,
  setTextBlocks,

  // other //
  setDisplayMethod,
  classArr,
}) => {

  const saveFile = () => {
    const code = getCode(
      [divArr, inputArr, buttonArr, textBlockArr],
      classArr
      );
    const fileName = "file.html";
    // file with {text = code} and {name = fileName}
    const blob = new Blob([code], { type: "text/plain" });
    saveAs(blob, fileName);
  };

  const setDisplay = () => {
    setDisplayMethod("class");
  };

  // buttonsComponents //
  const buttonsComponents = [
    {name: "div",
    function: () => setDivs(divs + 1)},

    {name: "button",
    function: () => setButtonBlocks(buttonBlocks + 1)},

    {name: "input",
    function: () => setInputBlocks(inputBlocks + 1)},

    {name: "h1",
    function: () => setTextBlocks({
      index: textBlocks.index + 1,
      type: "h1",
      style: {
        "font-size": "32px",
        "font-family" : "Helvetica Neue",
        "font-weight": "700"
      }
    })},
    
    {name: "h2",
    function: () => setTextBlocks({
      index: textBlocks.index + 1,
      type: "h2",
      style: {
        "font-size": "24px",
        "font-family" : "Helvetica Neue",
        "font-weight": "700"
      }
    })},
    
    {name: "h3",
    function: () => setTextBlocks({
      index: textBlocks.index + 1,
      type: "h3",
      style: {
        "font-size": "19px",
        "font-family" : "Helvetica Neue",
        "font-weight": "700"
      }
    })},
    
    {name: "h4",
    function: () => setTextBlocks({
      index: textBlocks.index + 1,
      type: "h4",
      style: {
        "font-size": "16px",
        "font-family" : "Helvetica Neue",
        "font-weight": "700"
      }
    })},
    
    {name: "h5",
    function: () => setTextBlocks({
      index: textBlocks.index + 1,
      type: "h5",
      style: {
        "font-size": "14px",
        "font-family" : "Helvetica Neue",
        "font-weight": "700"
      }
    })},
    
    {name: "h6",
    function: () => setTextBlocks({
      index: textBlocks.index + 1,
      type: "h6",
      style: {
        "font-size": "12px",
        "font-family" : "Helvetica Neue",
        "font-weight": "700"
      }
    })},
    
    {name: "p",
    function: () => setTextBlocks({
      index: textBlocks.index + 1,
      type: "p"})},
  ];
  // end of buttonsComponents //

  const otherButtons = [
    {name: "add class", function: setDisplay},
    {name: "save", function: saveFile},
  ];

  return (
    <div className={classes.button__panel}>

      {/* left button panel */}
      <div className={classes.button__div}>
        {buttonsComponents.map(btn =>

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
};

export default ButtonPanel;