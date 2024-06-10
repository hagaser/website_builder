import React, { useEffect, useState } from 'react';

// styles //
import './App.css';

// components //
import Panel from './components/UI/Panel/Panel';
import WorkingField from './components/UI/WorkingField/WorkingField';


function App() {

  // number of array elements //
  const [divs, setDivs] = useState(-1);
  const [inputBlocks, setInputBlocks] = useState(-1);
  const [buttonBlocks, setButtonBlocks] = useState(-1);
  const [textBlocks, setTextBlocks] = useState({index: -1, type: ""});

  // arrays //
  const [divArr, setDivArr] = useState([]);
  const [inputArr, setInputArr] = useState([]);
  const [buttonArr, setButtonArr] = useState([]);
  const [textBlockArr, setTextBlockArr] = useState([]);

  // other //
  const [displayMethod, setDisplayMethod] = useState("buttons");
  const [chosenClass, setChosenClass] = useState("");
  const [classArr, setClassArr] = useState([]);
  const [deletedClass, setDeletedClass] = useState(false);


  useEffect(() => {

    if (divs != -1) {
      setDivArr([...divArr, {
        ref: React.createRef(),
        index: divs,
        style: {},
        type: "div",
      }]);
    }

  },[divs]);

  useEffect(() => {

    if (inputBlocks != -1) {
      setInputArr([...inputArr, {
        ref: React.createRef(),
        index: inputBlocks,
        style: {},
        type: "input",
      }]);
    }

  },[inputBlocks]);

  useEffect(() => {

    if (buttonBlocks != -1) {
      setButtonArr([...buttonArr, {
        ref: React.createRef(),
        index: buttonBlocks,
        style: {},
        type: "button",
      }]);
    }

  },[buttonBlocks]);

  useEffect(() => {

    if (textBlocks.index != -1) {
      setTextBlockArr([...textBlockArr, {
        ref: React.createRef(),
        index: textBlocks.index,
        style: textBlocks.defStyle,
        defStyle: textBlocks.defStyle,
        type: textBlocks.type,
        value: ""
      }]);
    }

  },[textBlocks]);

  // if class deleted in general removes the styles of this class//
  const delDeletedStyle = (arrOfArr, arrOfFunc, func) => {
    for (let i = 0; i < arrOfArr.length; i++) {
      func(deletedClass, arrOfArr[i], arrOfFunc[i]);
    }
    setDeletedClass(false);
  }


  return (
    <div className="App">

      <Panel
        // number of array elements //
        divs = {divs}
        inputBlocks = {inputBlocks}
        buttonBlocks = {buttonBlocks}
        textBlocks = {textBlocks}

        // change the number of array elements //
        setDivs = {setDivs}
        setInputBlocks = {setInputBlocks}
        setButtonBlocks = {setButtonBlocks}
        setTextBlocks = {setTextBlocks}

        // arrays of elements //
        divArr = {divArr}
        inputArr = {inputArr}
        buttonArr = {buttonArr}
        textBlockArr = {textBlockArr}

        // other //
        setDisplayMethod = {setDisplayMethod}
        displayMethod = {displayMethod}

        setChosenClass = {setChosenClass}
        chosenClass = {chosenClass}

        setClassArr = {setClassArr}
        classArr = {classArr}

        setDeletedClass = {setDeletedClass}
      />

      <WorkingField
        // arrays of elements //
        divArr = {divArr}
        textBlockArr = {textBlockArr}
        inputArr = {inputArr}
        buttonArr = {buttonArr}

        // change the arrays of elements //
        setDivArr = {setDivArr}
        setTextBlockArr = {setTextBlockArr}
        setInputArr = {setInputArr}
        setButtonArr = {setButtonArr}

        // other //
        displayMethod = {displayMethod}
        chosenClass = {chosenClass}
        classArr = {classArr}
        delDeletedStyle = {delDeletedStyle}
        deletedClass = {deletedClass}
      />

    </div>
  );
}

export default App;
