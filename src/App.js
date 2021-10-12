
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import EditScreen from './editorScreen/EditScreen';
import { LandingPage } from './landingPage/LandingPage';
import PageSelectionScreen from './myComponents/PageSelectionScreen';
import Template1Page from './template1components/Template1Page'
import {LoginPage} from './loginPage/LoginPage'
import { Sugar } from 'react-preloaders2';


export default function App() {
  
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route exact path="/select-template">
            <PageSelectionScreen />
          </Route>
          <Route exact path='/edit/template-1'>
            <EditScreen temp={1}/>
          </Route>
          <Route exact path='/edit/template-2'>
            <EditScreen temp={2} />
          </Route>
          <Route exact path='/edit/template-3'>
            <EditScreen temp={3} />
          </Route>
          <Route exact path='/edit/template-4'>
            <EditScreen temp={4} />
          </Route>
          <Route exact path='/edit/new-template'>
            <EditScreen temp={0} />
          </Route>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/preview'>
            <Template1Page />
          </Route>
        </Switch>
      </Router>
      <Sugar background={'rgb(60, 172, 254)'} color={`rgb(255,255,255)`}/>
    </>
  );
}