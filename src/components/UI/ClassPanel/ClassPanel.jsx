import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import classes from "./ClassPanel.module.css"
import MyInput from "../MyInput/MyInput";

const ClassPanel = ({ setDisplayMethod, classArr, setClassArr, chosenClass, setChosenClass }) => {

  const [inputs, setInputs] = useState ([
    {name: "class name:", inpName: "className", value: "class1"},
    {name: "width:", inpName: "width", value: ""},
    {name: "height:", inpName: "height", value: ""},
    {name: "background-color:", inpName: "background-color", value: ""},
    {name: "color:", inpName: "color", value: ""},
    {name: "border:", inpName: "border", value: ""},
  ]);

  const handleInputChange = (e, inpName) => {
    const updatedInputs = inputs.map((inp) =>
      inp.inpName === inpName ? { ...inp, value: e.target.value } : inp
    );
    setInputs(updatedInputs);
  };

  const saveClass = () => {
    if (!classArr.find(item => item.className === inputs[0].value)) {
      let classPack = {}
      inputs.forEach(inp => {
        if (inp.value) {
          classPack[inp.inpName] = inp.value;
        }
      });
      setClassArr([...classArr, classPack])
    }
  }

  return (
    <div>
      <div className={classes.button__panel}>

        <div className={classes.button__div}>
          <MyButton
            onClick={() => setDisplayMethod("buttons")}
          >
            go to buttons
          </MyButton>
        </div>

        <div className={classes.button__div + " " + classes.right__btn__panel}>
          <MyButton
            onClick={() => saveClass()}
          >
            save class
          </MyButton>
          <h4 className={classes.classes}>classes:</h4>
          {classArr.map(btn => (
            btn.className === chosenClass ? (
              <button key={btn.className} onClick={() => setChosenClass(btn.className)} className={classes.chosen__btn}>
                {btn.className}
              </button>
            ) : (
              <MyButton key={btn.className} onClick={() => setChosenClass(btn.className)}>
                {btn.className}
              </MyButton>
            ))
          )}
        </div>

      </div>

      <div className={classes.form}>

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
    </div>
  );
};

export default ClassPanel