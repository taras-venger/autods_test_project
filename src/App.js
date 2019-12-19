import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UntrackedCSV from './components/pages/UntrackedCSV';
import UntrackedMannual from './components/pages/UntrackedMannual';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/mannual' component={UntrackedMannual} />
          <Route path='/csv' component={UntrackedCSV} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
