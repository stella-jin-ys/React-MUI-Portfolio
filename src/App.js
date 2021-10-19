import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';
import Resume from './components/Resume'
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';


function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contacts' component={Contacts} />
      
    </>
  );
}

export default App;
