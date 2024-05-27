import React, { useState } from "react";
import classes from "./Panel.module.css"
import MyButton from "../MyButton/MyButton";

const Panel = () => {
  
  const [displayPanel, setDisplayPanel] = useState(true);

  const buttons = [
    "div", "button", "input",
    "h1", "h2", "h3",
    "h4", "h5", "h6", "p"
  ];

  return (
    <div className={classes.panel__block}>
      {displayPanel
      ? 
        <div className={classes.panel}>
          {buttons.map(btn =>
            <MyButton key={btn}>&lt;{btn}&gt;</MyButton>
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