import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Map from './components/map/Map';

function App() {
  return (
    <BrowserRouter>
      <Route path='/map' component={Map}/>
      <Route path='/' component={Home}/>
    </BrowserRouter>
  );
}

export default App;
