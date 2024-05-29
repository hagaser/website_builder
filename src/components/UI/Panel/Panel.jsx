import React, { useState } from "react";
import classes from "./Panel.module.css";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import ClassPanel from "../ClassPanel/ClassPanel";

const Panel = ({ setDivs, divs, displayMethod, setDisplayMethod, setClassPack, divArr }) => {
  
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
            />
          }

          {displayMethod === "class" &&
            <ClassPanel
              setDisplayMethod={setDisplayMethod}
              setClassPack = {setClassPack}
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