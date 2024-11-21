import React, { useReducer, useEffect, useState } from 'react';

// styles //
import './App.css';

// components //
import Panel from './components/UI/Panel/Panel';
import WorkingField from './components/UI/WorkingField/WorkingField';

import { getPercentSize } from './utils/getPercentSize';

import { elementReducer } from "./reducers/elementReducer";


function App() {

  const [elements, dispatchElements] = useReducer(elementReducer, []);
  const [classArr, setClassArr] = useState([]);

  const [deletedClass, setDeletedClass] = useState(false);
  const [chosenClassOrAction, setChosenClassOrAction] = useState("");

  const [displayMethod, setDisplayMethod] = useState("buttons");

  // get percentage heights and widths for styles
  useEffect(() => {
    const root = document.documentElement;

    const data = [
      {varName: "--hundred-px-width", value: 100, action: "width"},
      {varName: "--hundred-px-height", value: 100, action: "height"},
      {varName: "--three-hundred-px-width", value: 300, action: "width"},
      {varName: "--thirty-px-height", value: 30, action: "height"},
      {varName: "--seventy-px-width", value: 70, action: "width"},
      {varName: "--twenty-px-height", value: 20, action: "height"}
    ];

    data.forEach(variable => {
      root.style.setProperty(variable.varName, getPercentSize(variable.value, variable.action));
    });

  }, []);

  return (
    <div className="App">

      <Panel
        elements = {elements}
        dispatchElements = {dispatchElements}

        setDisplayMethod = {setDisplayMethod}
        displayMethod = {displayMethod}

        setChosenClassOrAction = {setChosenClassOrAction}
        chosenClassOrAction = {chosenClassOrAction}

        setClassArr = {setClassArr}
        classArr = {classArr}

        setDeletedClass = {setDeletedClass}
      />

      <WorkingField
        elements = {elements}
        dispatchElements = {dispatchElements}

        chosenClassOrAction = {chosenClassOrAction}
        classArr = {classArr}
        deletedClass = {deletedClass}
      />

    </div>
  );
}

export default App;
