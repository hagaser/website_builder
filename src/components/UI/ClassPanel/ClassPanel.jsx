import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import classes from "./ClassPanel.module.css"
import MyInput from "../MyInput/MyInput";

const ClassPanel = ({ setDisplayMethod, setClassPack }) => {

  const inputs = [
    {name: "class name:", getVal: "className"},
    {name: "width:", getVal: "width"},
    {name: "height:", getVal: "height"},
  ]

  return (
    <div>
        
      <MyButton
        onClick={() => setDisplayMethod("buttons")}
      >
        go to buttons
      </MyButton>

      <div className={classes.form}>

        {inputs.map(inp =>
          <div key={inp.name} className={classes.input__block}>

            <h3>{inp.name}</h3>
            <MyInput

              onChange={(e) => {
                setClassPack((newClassPack) => ({
                  ...newClassPack,
                  [inp.getVal]: e.target.value,
                }));

              }}
            />

          </div>
        )}

      </div>
    </div>
  );
};

export default ClassPanel