import React from "react";
import MyInput from "../MyInput/MyInput";
import classes from "./ClassInputs.module.css"

const ClassInputs = ({ inputs, handleInputChange }) => {
  return (
    <div className={classes.form}>

     {/* all styles inputs */}
     {inputs.map(inp =>
        <div key={inp.name} className={classes.input__block}>

          <h3>{inp.name}</h3>
          <MyInput
            value={inp.value}
            onChange={(e) => handleInputChange(e, inp.inpName)}
          />

        </div>
      )}

    </div>
  );
};

export default ClassInputs;