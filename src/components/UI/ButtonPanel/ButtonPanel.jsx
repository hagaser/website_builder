import React from "react";
import classes from "./ButtonPanel.module.css";
import MyButton from "../MyButton/MyButton";
import { saveAs } from 'file-saver';

const ButtonPanel = ({ setDivs, divs, setDisplayMethod, divArr }) => {

  let app =""
  const fpCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
`;
const spCode = `
</body>
</html>`;


  const fileName = "file.html";

  const saveFile = () => {

    divArr.forEach(divEl => {
      const coordinates = (divEl.ref.current.style.transform).match(/translate\(([^,]+), ([^)]+)\)/)
      const styles = " " + Object.entries(divEl.style).map(([property, value]) => `${property}: ${value};`).join(' ')
      app = app + `<div style="position: absolute; left: ${coordinates[1]}; top: ${coordinates[2]}; background-color: #0074D9; width: 100px; height: 100px;${styles}"></div>\n`
    });

    const code = fpCode + app + spCode;
    const blob = new Blob([code], { type: "text/plain" });
    saveAs(blob, fileName);
    app = ""
  };

  const setDisplay = () => {
    setDisplayMethod("class")
  }

  const buttonsComponents = [
    {name: "div", function: setDivs, state: divs},
    {name: "button", function: null, state: null},
    {name: "input", function: null, state: null},
    {name: "h1", function: null, state: null},
    {name: "h2", function: null, state: null},
    {name: "h3", function: null, state: null},
    {name: "h4", function: null, state: null},
    {name: "h5", function: null, state: null},
    {name: "h6", function: null, state: null},
    {name: "p", function: null, state: null},
  ];

  const otherButtons = [
    {name: "add class", function: setDisplay},
    {name: "save", function: saveFile},
  ];

  return (
    <div className={classes.button__panel}>
      <div className={classes.button__div}>
        {buttonsComponents.map(btn =>
          <MyButton key={btn.name} onClick = {() => btn.function(btn.state + 1)}>&lt;{btn.name}&gt;</MyButton>
        )}
      </div>
      <div className={classes.button__div}>
        {otherButtons.map(btn =>
          <MyButton key={btn.name} onClick = {() => btn.function()}>{btn.name}</MyButton>
        )}
      </div>
    </div>
  );
};

export default ButtonPanel