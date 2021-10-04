
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
  useEffect(() => {
    console.log("CurrentTemp: ", temp);
  }, [temp]);
  
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
          <EditScreen temp={temp}/>
        </Route>
        <Route exact path='/preview'>
          <Template1Page/>
        </Route>
      </Switch>
    </Router>
  );
}