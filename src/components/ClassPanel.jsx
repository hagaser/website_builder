import React, { useState } from "react";

// components //
import ClassButtons from "./UI/ClassButtons/ClassButtons";
import ClassInputs from "./UI/ClassInputs/ClassInputs";


const ClassPanel = ({
  setDisplayMethod,
  classArr, setClassArr,
  chosenClass, setChosenClass
}) => {

  // add here new styles //
  const [inputs, setInputs] = useState ([
    {name: "class name:", inpName: "className", value: "class1"},
    {name: "width:", inpName: "width", value: ""},
    {name: "height:", inpName: "height", value: ""},
    {name: "background-color:", inpName: "background-color", value: ""},
    {name: "color:", inpName: "color", value: ""},
    {name: "border:", inpName: "border", value: ""},
  ]);

  // changes input values //
  const handleInputChange = (e, inpName) => {
    const updatedInputs = inputs.map((inp) =>
      // if input value changed then update state, else return old
      inp.inpName === inpName
      ? { ...inp, value: e.target.value }
      : inp
    );
    setInputs(updatedInputs);
  };

  // save the class in the ClassPanel buttons //
  const saveClass = () => {
    // if there is no such class with such name //
    if (!classArr.find(item => item.className === inputs[0].value)) {

      let classPack = {};

      // builds a class block //
      inputs.forEach(inp => {
        if (inp.value) { // if input value not empty
          classPack[inp.inpName] = inp.value;
        }
      });

      // add class block to classArr //
      setClassArr([...classArr, classPack]);
    }
  }

  return (
    <div>

      <ClassButtons
        setDisplayMethod = {setDisplayMethod}
        saveClass = {saveClass}
        classArr = {classArr}

        chosenClass = {chosenClass}
        setChosenClass = {setChosenClass}
      />

      <ClassInputs
        inputs = {inputs}
        handleInputChange = {handleInputChange}
      />

    </div>
  );
};

export default ClassPanel;