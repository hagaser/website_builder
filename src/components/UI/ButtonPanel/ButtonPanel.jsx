import React from "react";
import classes from "./ButtonPanel.module.css";
import MyButton from "../MyButton/MyButton";
import { saveAs } from 'file-saver';

const ButtonPanel = ({ setDivs, divs, setDisplayMethod, divArr, classArr }) => {

  let app = ""
  let headPart = "<style>\n"
  const fpCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
`
const spCode = `</style>
</head>
<body>
`;
const lpCode = `
</body>
</html>`;


  const fileName = "file.html";

  const saveFile = () => {

    divArr.forEach(divEl => {
      const coordinates = (divEl.ref.current.style.transform).match(/translate\(([^,]+), ([^)]+)\)/)
      headPart = headPart + `.def-and-pos${divEl.index} {\n  position: absolute;\n  left: ${coordinates[1]};\n  top: ${coordinates[2]};\n  background-color: #0074D9;\n  width: 100px;\n  height: 100px;\n}\n`
      if (divEl.class) {
        app = app + `<div class="${divEl.class} def-and-pos${divEl.index}"></div>\n`
      } else {
        app = app + `<div class="def-and-pos${divEl.index}"></div>\n`
      }
    });
    classArr.forEach(classObject => {
      let classBlock = ""
      let classOb = {...classObject}
      classBlock = `.${classOb.className} {\n`
      delete classOb.className
      classBlock = classBlock + Object.entries(classOb).map(([property, value]) => `  ${property}: ${value};\n`).join('')
      classBlock = classBlock + "}\n"
      headPart = headPart + classBlock;
    })

    const code = fpCode + headPart + spCode + app + lpCode;
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