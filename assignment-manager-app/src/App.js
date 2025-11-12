import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Assignments from './pages/Assignments';
import Practice from './pages/Practice';
import Grading from './pages/Grading';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/assignments" component={Assignments} />
          <Route path="/practice" component={Practice} />
          <Route path="/grading" component={Grading} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;