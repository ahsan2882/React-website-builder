
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import MainSection from './landingPage/MainSection';
import PageSelectionScreen from './myComponents/PageSelectionScreen';
import Template4Page from './template4components/Template4Page';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainSection/>
        </Route>
        <Route exact path="/select-template">
          <PageSelectionScreen/>
        </Route>
        <Route exact path='/edit/template-4'>
          <Template4Page/>
        </Route>
      </Switch>
    </Router>
  );
}