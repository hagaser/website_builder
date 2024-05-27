import React, { useState } from "react";
import classes from "./Panel.module.css";
import MyButton from "../MyButton/MyButton";

const Panel = ({ setDivs, divs }) => {
  
  const [displayPanel, setDisplayPanel] = useState(true);

  const rootClasses = [classes.panel__block];
  if (!displayPanel) rootClasses.push(classes.hiden__block);

  const buttons = [
    {name: "div", function: setDivs, state: divs},
    {name: "button", function: null, state: null},
    {name: "input", function: null, state: null},
    {name: "h1", function: null, state: null},
    {name: "h2", function: null, state: null},
    {name: "h3", function: null, state: null},
    {name: "h4", function: null, state: null},
    {name: "h5", function: null, state: null},
    {name: "h6", function: null, state: null},
    {name: "p", function: null, state: null}
  ];

  return (
    <div className={rootClasses.join(" ")}>
      {displayPanel
      ? 
        <div className={classes.panel}>
          {buttons.map(btn =>
            <MyButton key={btn.name} onClick = {() => btn.function(btn.state + 1)}>&lt;{btn.name}&gt;</MyButton>
          )}
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