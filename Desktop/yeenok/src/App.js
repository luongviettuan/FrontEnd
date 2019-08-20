import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from'./pages/Login';
import About from './pages/About';
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/login/" exact component={Login} />
        <Route path="/about/" exact component={About} />
      </div>
    </Router>
  );
}

export default App;
