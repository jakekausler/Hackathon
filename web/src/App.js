import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Map from './components/map/Map';
import Step1 from './components/home/step1/Step1';
import Step2 from './components/home/step2/Step2';
import Step3 from './components/home/step3/Step3';
import PointPage from './components/pointPage/PointPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import CreateAccount from './components/account-creation';

import { createStore, combineReducers } from 'redux';
import { authReducer } from './reducers/authReducer';
import { Provider } from 'react-redux';
import { PageDoesNotExist } from './components/common/PageDoesNotExist';
import { withRouter } from 'react-router';


const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer)

const RootApp = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <AppWithRouter />
        </BrowserRouter>
      </Provider>
  )
}

export default RootApp;

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path='/step1' component={Step1}/>
          <Route path='/step2' component={Step2}/>
          <Route path='/step3' component={Step3}/>
          <Route path='/create-account' component={CreateAccount}/>
          <Route path='/map' component={Map}/>
          <Route path='/point-page' component={PointPage}/>
          <Route path='/register-options' component={Home}/>
          <Route exact path='/' component={Home}/>
          <Route path='*' component={PageDoesNotExist}/>
        </Switch>
        <Footer />
      </>
    );
  }
}

const AppWithRouter = withRouter(App);
