import React, { useEffect, useState } from 'react';
import './App.css';
import Panel from './components/UI/Panel/Panel';
import WorkingField from './components/UI/WorkingField/WorkingField';

function App() {

  const [divs, setDivs] = useState(-1);
  const [displayMethod, setDisplayMethod] = useState("buttons");
  const [divArr, setDivArr] = useState([]);
  const [chosenClass, setChosenClass] = useState("");
  const [classArr, setClassArr] = useState([]);

  useEffect(() => {
    if (divs != -1) setDivArr([...divArr, {ref: React.createRef(), index: divs, style: {}}])
  },[divs])

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
      />
      <WorkingField
        divArr = {divArr}
        displayMethod = {displayMethod}
        setDivArr = {setDivArr}
        chosenClass = {chosenClass}
        classArr = {classArr}
      />
    </div>
  );
}

export default App;
