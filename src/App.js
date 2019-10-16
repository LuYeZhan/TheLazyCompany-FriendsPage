import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs'
// import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AnonRoute path="/" exact component= {Home}/>
          <AnonRoute path="/about" exact component= {About}/>
          <AnonRoute path="/works" exact component= {Works}/>
          <AnonRoute path="/blog" exact component= {Blog}/>
          <AnonRoute path="/jobs" exact component= {Jobs}/>
          <AnonRoute path="/contact" exact component= {Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
