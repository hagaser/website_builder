import React from "react";
import classes from "./ButtonPanel.module.css";
import MyButton from "../MyButton/MyButton";
import { saveAs } from 'file-saver';

const ButtonPanel = ({ inputArr, buttonArr, inputBlocks, setInputBlocks, buttonBlocks, setButtonBlocks, setDivs, divs, setDisplayMethod, divArr, classArr, setTextBlocks, textBlocks, textBlockArr }) => {

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
      headPart = headPart + `.def-and-pos-div${divEl.index} {\n  position: absolute;\n  left: ${coordinates[1]};\n  top: ${coordinates[2]};\n  background-color: #0074D9;\n  width: 100px;\n  height: 100px;\n}\n`
      if (divEl.class) {
        app = app + `<div class="${divEl.class} def-and-pos-div${divEl.index}"></div>\n`
      } else {
        app = app + `<div class="def-and-pos-div${divEl.index}"></div>\n`
      }
    });

    inputArr.forEach(inp => {
      const coordinates = (inp.ref.current.style.transform).match(/translate\(([^,]+), ([^)]+)\)/)
      headPart = headPart + `.def-and-pos-inp${inp.index} {\n  position: absolute;\n  left: ${coordinates[1]};\n  top: ${coordinates[2]};\n  width: 300px;\n  height: 30px;\n}\n`
      if (inp.class) {
        app = app + `<input class="${inp.class} def-and-pos-inp${inp.index}"></input>\n`
      } else {
        app = app + `<input class="def-and-pos-inp${inp.index}"></input>\n`
      }
    });

    buttonArr.forEach(btn => {
      const coordinates = (btn.ref.current.style.transform).match(/translate\(([^,]+), ([^)]+)\)/)
      headPart = headPart + `.def-and-pos-btn${btn.index} {\n  position: absolute;\n  left: ${coordinates[1]};\n  top: ${coordinates[2]};\n width: 70px;\n  height: 20px;\n}\n`
      if (btn.class) {
        app = app + `<button class="${btn.class} def-and-pos-btn${btn.index}">${btn.value}</button>\n`
      } else {
        app = app + `<button class="def-and-pos-btn${btn.index}"></button>\n`
      }
    });

    textBlockArr.forEach(textBlock => {
      const coordinates = (textBlock.ref.current.style.transform).match(/translate\(([^,]+), ([^)]+)\)/)
      headPart = headPart + `.def-and-pos-${textBlock.type}${textBlock.index} {\n  position: absolute;\n  left: ${coordinates[1]};\n  top: ${+coordinates[2].substr(0, coordinates[2].length - 2) - 20}px;\n  width: 100px;\n  height: 100px;\n}\n`
      if (textBlock.class) {
        app = app + `<${textBlock.type} class="${textBlock.class} def-and-pos-${textBlock.type}${textBlock.index}">${textBlock.value}</${textBlock.type}>\n`
      } else {
        app = app + `<${textBlock.type} class="def-and-pos-${textBlock.type}${textBlock.index}">${textBlock.value}</${textBlock.type}>\n`
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
    {name: "div", function: () => setDivs(divs + 1)},
    {name: "button", function: () => setButtonBlocks(buttonBlocks + 1)},
    {name: "input", function: () => setInputBlocks(inputBlocks + 1)},
    {name: "h1", function: () => setTextBlocks({index: textBlocks.index + 1, type: "h1", style: {"font-size": "32px", "font-family" : "Helvetica Neue", "font-weight": "700"}})},
    {name: "h2", function: () => setTextBlocks({index: textBlocks.index + 1, type: "h2", style: {"font-size": "24px", "font-family" : "Helvetica Neue", "font-weight": "700"}})},
    {name: "h3", function: () => setTextBlocks({index: textBlocks.index + 1, type: "h3", style: {"font-size": "19px", "font-family" : "Helvetica Neue", "font-weight": "700"}})},
    {name: "h4", function: () => setTextBlocks({index: textBlocks.index + 1, type: "h4", style: {"font-size": "16px", "font-family" : "Helvetica Neue", "font-weight": "700"}})},
    {name: "h5", function: () => setTextBlocks({index: textBlocks.index + 1, type: "h5", style: {"font-size": "14px", "font-family" : "Helvetica Neue", "font-weight": "700"}})},
    {name: "h6", function: () => setTextBlocks({index: textBlocks.index + 1, type: "h6", style: {"font-size": "12px", "font-family" : "Helvetica Neue", "font-weight": "700"}})},
    {name: "p", function: () => setTextBlocks({index: textBlocks.index + 1, type: "p"})},
  ];

  const otherButtons = [
    {name: "add class", function: setDisplay},
    {name: "save", function: saveFile},
  ];

  return (
    <div className={classes.button__panel}>
      <div className={classes.button__div}>
        {buttonsComponents.map(btn =>
          <MyButton key={btn.name} onClick = {() => btn.function()}>&lt;{btn.name}&gt;</MyButton>
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