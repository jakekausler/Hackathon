import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Map from './components/map/Map';
import Step1 from './components/home/step1/Step1';
import Step2 from './components/home/step2/Step2';
import Step3 from './components/home/step3/Step3';
import PointPage from './components/pointPage/PointPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/step1' component={Step1}/>
        <Route path='/step2' component={Step2}/>
        <Route path='/step3' component={Step3}/>
        <Route path='/map' component={Map}/>
        <Route path='/point-page' component={PointPage}/>
        <Route path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
