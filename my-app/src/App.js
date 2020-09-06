import React, { Component } from 'react';
//import components

import Home from '../src/pages/Home.jsx';
import Calendar from '../src/pages/Calendar.jsx';
import Document from '../src/pages/Document.jsx';
import Chat from '../src/pages/Chat.jsx';
import {Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/Calendar" component={Calendar}/>
        <Route exact path="/Document" component={Document}/>
        <Route exact path="/Chat" component={Chat}/>
      </div>
    );
  }
}

export default App;
