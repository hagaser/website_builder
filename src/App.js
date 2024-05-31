import React, { useEffect, useState } from 'react';
import './App.css';
import Panel from './components/UI/Panel/Panel';
import WorkingField from './components/UI/WorkingField/WorkingField';

function App() {

  const [divs, setDivs] = useState(-1);
  const [inputBlocks, setInputBlocks] = useState(-1);
  const [buttonBlocks, setButtonBlocks] = useState(-1);
  const [textBlocks, setTextBlocks] = useState({index: -1, type: ""});
  const [displayMethod, setDisplayMethod] = useState("buttons");
  const [divArr, setDivArr] = useState([]);
  const [buttonArr, setButtonArr] = useState([]);
  const [inputArr, setInputArr] = useState([]);
  const [textBlockArr, setTextBlockArr] = useState([]);
  const [chosenClass, setChosenClass] = useState("");
  const [classArr, setClassArr] = useState([]);

  useEffect(() => {
    if (divs != -1) setDivArr([...divArr, {ref: React.createRef(), index: divs, style: {}}])
  },[divs])

  useEffect(() => {
    if (inputBlocks != -1) setInputArr([...inputArr, {ref: React.createRef(), index: inputBlocks, style: {}}])
  },[inputBlocks])

  useEffect(() => {
    if (buttonBlocks != -1) setButtonArr([...buttonArr, {ref: React.createRef(), index: buttonBlocks, style: {}}])
  },[buttonBlocks])

  useEffect(() => {
    if (textBlocks.index != -1) setTextBlockArr([...textBlockArr, {ref: React.createRef(), index: textBlocks.index, style: textBlocks.style, type: textBlocks.type, value: ""}])
  },[textBlocks])

  return (
    <div className="App">
      <Panel
        setDivs = {setDivs}
        divs = {divs}
        displayMethod = {displayMethod}
        setDisplayMethod = {setDisplayMethod}
        divArr = {divArr}
        setChosenClass = {setChosenClass}
        chosenClass = {chosenClass}
        classArr = {classArr}
        setClassArr = {setClassArr}
        setTextBlocks = {setTextBlocks}
        textBlocks = {textBlocks}
        textBlockArr = {textBlockArr}
        inputBlocks = {inputBlocks}
        setInputBlocks = {setInputBlocks}
        buttonBlocks = {buttonBlocks}
        setButtonBlocks = {setButtonBlocks}
        inputArr = {inputArr}
        buttonArr = {buttonArr}
      />
      <WorkingField
        divArr = {divArr}
        displayMethod = {displayMethod}
        setDivArr = {setDivArr}
        chosenClass = {chosenClass}
        classArr = {classArr}
        textBlockArr = {textBlockArr}
        setTextBlockArr = {setTextBlockArr}
        setInputArr = {setInputArr}
        inputArr = {inputArr}
        setButtonArr = {setButtonArr}
        buttonArr = {buttonArr}
      />
    </div>
  );
}

export default App;
