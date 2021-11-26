import React from 'react';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import About from "./About";
import { Route, Switch } from "react-router-dom";
import Navig from './Navig';
import src from "./images/ice.jpg"




function App() {
  return (
    <div>
      <div className="head" style={{backgroundImage:`url(${src})`,backgroundSize:"cover"}}>
        <Navig />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
