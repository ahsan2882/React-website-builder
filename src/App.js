
import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import EditScreen from './editorScreen/EditScreen';
import { LandingPage } from './landingPage/LandingPage';
import PageSelectionScreen from './myComponents/PageSelectionScreen';
import Template1Page from './template1components/Template1Page'
import Template2Page from './template2components/Template2Page'
import Template3Page from './template3components/Template3Page'
import Template4Page from './template4components/Template4Page'


export default function App() {

  const [temp, setTemp] = useState(0);
  const [val, setVal] = useState(0);
  var template;
  switch (val) {
    case 1:
      template = <Template1Page />
      break;
    case 2:
      template = <Template2Page />
      break;
    case 3:
      template = <Template3Page />
      break;
    case 4:
      template = <Template4Page />
      break;
    default:
      template = <h2>Please Create a Template</h2>
  }
  
  useEffect(() => {
    console.log("CurrentTemp: ", val);
  }, [val]);
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route exact path="/select-template">
          <PageSelectionScreen setTemp={setTemp}/>
        </Route>
        <Route exact path='/edit'>
          <EditScreen temp={temp} previewTemp={setVal}/>
        </Route>
        <Route exact path='/preview'>
          {template}
        </Route>
      </Switch>
    </Router>
  );
}