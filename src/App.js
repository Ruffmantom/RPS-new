import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./Pages/Game";
import './style.css';



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Game}/>
      </div>
    </Router>
  );
}

export default App;
