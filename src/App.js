import React, { useEffect, useState } from 'react';
import './App.css';
import Panel from './components/UI/Panel/Panel';
import WorkingField from './components/UI/WorkingField/WorkingField';
import { getArray } from './utils/getArray';

function App() {

  const [divs, setDivs] = useState(-1);
  const [displayMethod, setDisplayMethod] = useState("buttons");
  const [divArr, setDivArr] = useState([]);
  const [classPack, setClassPack] = useState(
    {height: "0px", width: "0px", className: "class1"}
  );

  useEffect(() => {
    if (divs != -1) setDivArr([...divArr, {index: divs, style: {}}])
  },[divs])

  return (
    <div className="App">
      <Panel
        setDivs = {setDivs}
        divs = {divs}
        displayMethod = {displayMethod}
        setDisplayMethod = {setDisplayMethod}
        setClassPack = {setClassPack}
      />
      <WorkingField
        divArr = {divArr}
        displayMethod = {displayMethod}
        setDivArr = {setDivArr}
        classPack = {classPack}
      />
    </div>
  );
}

export default App;
