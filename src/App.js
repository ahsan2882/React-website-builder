
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import EditScreen from './editorScreen/EditScreen';
import { LandingPage } from './landingPage/LandingPage';
import PageSelectionScreen from './myComponents/PageSelectionScreen';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route exact path="/select-template">
          <PageSelectionScreen/>
        </Route>
        <Route exact path='/edit'>
          <EditScreen/>
        </Route>
      </Switch>
    </Router>
  );
}