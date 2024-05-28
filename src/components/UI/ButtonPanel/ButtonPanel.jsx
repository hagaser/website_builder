import React from "react";
import classes from "./ButtonPanel.module.css";
import MyButton from "../MyButton/MyButton";

const ButtonPanel = ({ setDivs, divs, setDisplayMethod }) => {

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
    {name: "add class", function: setDisplayMethod},
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
          <MyButton key={btn.name} onClick = {() => btn.function("class")}>{btn.name}</MyButton>
        )}
      </div>
    </div>
  );
};

export default ButtonPanel