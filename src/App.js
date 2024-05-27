import React, { useState } from 'react';
import './App.css';
import Panel from './components/UI/Panel/Panel';
import WorkingField from './components/UI/WorkingField/WorkingField';
import { getArray } from './utils/getArray';

function App() {

  const [divs, setDivs] = useState(0);

  const divArr = getArray(divs)

  return (
    <div className="App">
      <Panel
        setDivs = {setDivs}
        divs = {divs}
      />
      <WorkingField
        divArr = {divArr}
      />
    </div>
  );
}

export default App;
