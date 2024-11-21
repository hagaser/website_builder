import React, { useReducer, useCallback, memo } from "react";

// components //
import ClassButtons from "./UI/ClassButtons/ClassButtons";
import ClassInputs from "./UI/ClassInputs/ClassInputs";

// redusers //
import { inputReducer } from "../reducers/inputReducer";


const ClassPanel = memo(({
  setDisplayMethod, 
  classArr, setClassArr,
  chosenClassOrAction, setChosenClassOrAction,
  setDeletedClass,
}) => {

  // add here new styles //
  const [inputs, dispatchInputs] = useReducer(inputReducer, [
    {name: "class name:", inpName: "className", value: "class1"},
    {name: "width:", inpName: "width", value: ""},
    {name: "height:", inpName: "height", value: ""},
    {name: "background-color:", inpName: "backgroundColor", value: ""},
    {name: "color:", inpName: "color", value: ""},
    {name: "border:", inpName: "border", value: ""},
    {name: "font-size:", inpName: "fontSize", value: ""},
    {name: "cursor:", inpName: "cursor", value: ""},
    {name: "z-index:", inpName: "zIndex", value: ""},
  ]);

  // changes input values //
  const handleInputChange = (e, inpName) => {
    dispatchInputs({
      type: "UPDATE_INPUT",
      payload: { inpName, value: e.target.value }
    });
  };

  // save the class in the ClassPanel buttons //
  const saveClass = useCallback(() => {
    // if there is no such class with such name //
    if (!classArr.find(item => item.className === inputs[0].value)) {

      const classPack = {};

      // builds a class block //
      inputs.forEach(inp => {
        if (inp.value) { // if input value not empty
          classPack[inp.inpName] = inp.value;
        }
      });

      // add class block to classArr //
      setClassArr([...classArr, classPack]);
    }
  }, [classArr, inputs, setClassArr]);

  return (
    <div>

      <ClassButtons
        setDisplayMethod = {setDisplayMethod}
        saveClass = {saveClass}
        setDeletedClass = {setDeletedClass}

        classArr = {classArr}
        setClassArr = {setClassArr}

        chosenClassOrAction = {chosenClassOrAction}
        setChosenClassOrAction = {setChosenClassOrAction}
      />

      <ClassInputs
        inputs = {inputs}
        handleInputChange = {handleInputChange}
      />

    </div>
  );
});

export default ClassPanel;