import React, { useEffect, useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { withRouter } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';
import Home from './components/home/Home';
import Map from './components/map/Map';
import Step1 from './components/home/step1/Step1';
import Step2 from './components/home/step2/Step2';
import Step3 from './components/home/step3/Step3';
import PointPage from './components/pointPage/PointPage';
import UserPage from './components/UserPage/UserPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import CreateAccount from './components/account-creation';
import AffinityPage from './components/find-your-place';

import { authReducer } from './reducers/authReducer';
import { settingsReducer } from './reducers/settingsReducer';
import { Provider } from 'react-redux';
import { PageDoesNotExist } from './components/common/PageDoesNotExist';


const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
});

const store = createStore(rootReducer)

const RootApp = () => {
  return (
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <BrowserRouter>
            <AppWithRouter />
          </BrowserRouter>
        </MuiThemeProvider>
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
          <Route path='/register-affinity' component={AffinityPage}/>
          <Route path='/map' component={Map}/>
          <Route path='/point-page' component={PointPage}/>
          <Route path='/user-page' component={UserPage}/>
          <Route exact path='/' component={Home}/>
          <Route path='*' component={PageDoesNotExist}/>
        </Switch>
        <Footer />
      </>
    );
  }
}

const AppWithRouter = withRouter(App);
