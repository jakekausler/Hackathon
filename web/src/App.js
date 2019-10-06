import React from 'react';
import { createStore, combineReducers } from 'redux';
import { withRouter } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';
import Home from './components/home/Home';
import PointPage from './components/pointPage/PointPage';
import UserPage from './components/UserPage/UserPage';
import UserProfile from './components/UserProfile/UserProfile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import CreateAccount from './components/account-creation';
import AffinityPage from './components/find-your-place';
import ProfileSettings from './components/profile-settings';
import RegistrationComplete from './components/registration-complete';

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
      <div style={{minHeight: '100vh', boxSizing: 'border-box'}} id='app-container'>
        <Header />
        <Switch>
          <Route path='/create-account' component={CreateAccount}/>
          <Route path='/register-affinity' component={AffinityPage}/>
          <Route path='/profile-settings' component={ProfileSettings}/>
          <Route path='/point-page' component={PointPage}/>
          <Route path='/user-page' component={UserPage}/>
          <Route path='/registration-complete' component={RegistrationComplete}/>
          <Route path='/user-profile' component={UserProfile}/>
          {/* <Route path='/profile/:id' component={UserProfile}/> */}
          <Route exact path='/' component={Home}/>
          <Route path='*' component={PageDoesNotExist}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
